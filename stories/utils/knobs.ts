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

import { select, array } from '@storybook/addon-knobs';

import { Rotation, Position, Placement } from '../../src';
import { TooltipType } from '../../src/specs/constants';

export const numberSelect = <T extends number>(
  name: string,
  options: { [s: string]: T },
  value: T,
  groupId?: string,
): T => (parseInt(select<T | string>(name, options, value, groupId) as string, 10) as T) || value;

export const getChartRotationKnob = () =>
  numberSelect<Rotation>(
    'chartRotation',
    {
      '0 deg': 0,
      '90 deg': 90,
      '-90 deg': -90,
      '180 deg': 180,
    },
    0,
  );

export const getTooltipTypeKnob = (name = 'tooltip type', defaultValue = TooltipType.VerticalCursor) =>
  select<TooltipType>(
    name,
    {
      Vertical: TooltipType.VerticalCursor,
      Follow: TooltipType.Follow,
      Crosshairs: TooltipType.Crosshairs,
      None: TooltipType.None,
    },
    defaultValue,
  );

export const getPositionKnob = (name = 'chartRotation', defaultValue = Position.Right) =>
  select<Position>(
    name,
    {
      Right: Position.Right,
      Left: Position.Left,
      Top: Position.Top,
      Bottom: Position.Bottom,
    },
    defaultValue,
  );

export const getPlacementKnob = (name = 'placement', defaultValue?: Placement) => {
  const value = select<Placement | undefined>(
    name,
    {
      Default: undefined,
      Top: Placement.Top,
      Bottom: Placement.Bottom,
      Left: Placement.Left,
      Right: Placement.Right,
      TopStart: Placement.TopStart,
      TopEnd: Placement.TopEnd,
      BottomStart: Placement.BottomStart,
      BottomEnd: Placement.BottomEnd,
      RightStart: Placement.RightStart,
      RightEnd: Placement.RightEnd,
      LeftStart: Placement.LeftStart,
      LeftEnd: Placement.LeftEnd,
      Auto: Placement.Auto,
      AutoStart: Placement.AutoStart,
      AutoEnd: Placement.AutoEnd,
    },
    defaultValue,
  );

  return value || undefined;
};

export function arrayKnobs(name: string, values: (string | number)[]): (string | number)[] {
  const stringifiedValues = values.map<string>((d) => `${d}`);
  return array(name, stringifiedValues).map<string | number>((value: string) => !isNaN(parseFloat(value)) ? parseFloat(value) : value);
}
