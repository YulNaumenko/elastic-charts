/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Scale } from '../../../scales';
import { Rotation, Position } from '../../../utils/commons';
import { Dimensions } from '../../../utils/dimensions';
import { AnnotationId, GroupId } from '../../../utils/ids';
import { Point } from '../../../utils/point';
import { isHorizontalRotation } from '../state/utils/common';
import { getAxesSpecForSpecId } from '../state/utils/spec';
import {
  AnnotationDomainType,
  AnnotationDomainTypes,
  AnnotationSpec,
  AxisSpec,
  isLineAnnotation,
  isRectAnnotation,
} from '../utils/specs';
import { computeLineAnnotationDimensions } from './line/dimensions';
import { computeRectAnnotationDimensions } from './rect/dimensions';
import { AnnotationDimensions } from './types';

/** @internal */
export function getAnnotationAxis(
  axesSpecs: AxisSpec[],
  groupId: GroupId,
  domainType: AnnotationDomainType,
  chartRotation: Rotation,
): Position | null {
  const { xAxis, yAxis } = getAxesSpecForSpecId(axesSpecs, groupId);
  const isHorizontalRotated = isHorizontalRotation(chartRotation);
  const isXDomainAnnotation = isXDomain(domainType);
  const annotationAxis = isXDomainAnnotation ? xAxis : yAxis;
  const rotatedAnnotation = isHorizontalRotated ? annotationAxis : (isXDomainAnnotation ? yAxis : xAxis);
  return rotatedAnnotation ? rotatedAnnotation.position : null;
}

/** @internal */
export function isXDomain(domainType: AnnotationDomainType): boolean {
  return domainType === AnnotationDomainTypes.XDomain;
}

/** @internal */
export function getTranformedCursor(
  cursorPosition: Point,
  chartDimensions: Dimensions,
  chartRotation: Rotation | null,
  /**
   * Used to account for projected cursor position relative to chart dimensions
   */
  projectArea = false,
): Point {
  const { height, width, left, top } = chartDimensions;
  let { x, y } = cursorPosition;

  if (projectArea) {
    x = cursorPosition.x - left;
    y = cursorPosition.y - top;
  }

  if (chartRotation === null) {
    return { x, y };
  }

  switch (chartRotation) {
    case 90:
      return { x: y, y: width - x };
    case -90:
      return { x: height - y, y: x };
    case 180:
      return { x: width - x, y: height - y };
    case 0:
    default:
      return { x, y };
  }
}

/** @internal */
export function invertTranformedCursor(
  cursorPosition: Point,
  chartDimensions: Dimensions,
  chartRotation: Rotation | null,
  /**
   * Used to account for projected cursor position relative to chart dimensions
   */
  projectArea = false,
): Point {
  const { height, width, left, top } = chartDimensions;
  let { x, y } = cursorPosition;

  switch (chartRotation) {
    case 0:
    case null:
      break;
    case 90:
      x = width - cursorPosition.y;
      y = cursorPosition.x;
      break;
    case -90:
      y = height - cursorPosition.x;
      x = cursorPosition.y;
      break;
    case 180:
    default:
      y = height - cursorPosition.y;
      x = width - cursorPosition.x;
  }

  if (projectArea) {
    x += left;
    y += top;
  }

  return { x, y };
}

/** @internal */
export function computeAnnotationDimensions(
  annotations: AnnotationSpec[],
  chartDimensions: Dimensions,
  chartRotation: Rotation,
  yScales: Map<GroupId, Scale>,
  xScale: Scale,
  axesSpecs: AxisSpec[],
  isHistogramModeEnabled: boolean,
): Map<AnnotationId, AnnotationDimensions> {
  const annotationDimensions = new Map<AnnotationId, AnnotationDimensions>();

  annotations.forEach((annotationSpec) => {
    const { id } = annotationSpec;
    if (isLineAnnotation(annotationSpec)) {
      const { groupId, domainType } = annotationSpec;
      const annotationAxisPosition = getAnnotationAxis(axesSpecs, groupId, domainType, chartRotation);

      const dimensions = computeLineAnnotationDimensions(
        annotationSpec,
        chartDimensions,
        chartRotation,
        yScales,
        xScale,
        annotationAxisPosition,
        isHistogramModeEnabled,
      );

      if (dimensions) {
        annotationDimensions.set(id, dimensions);
      }
    } else if (isRectAnnotation(annotationSpec)) {
      const dimensions = computeRectAnnotationDimensions(annotationSpec, yScales, xScale, isHistogramModeEnabled);

      if (dimensions) {
        annotationDimensions.set(id, dimensions);
      }
    }
  });

  return annotationDimensions;
}
