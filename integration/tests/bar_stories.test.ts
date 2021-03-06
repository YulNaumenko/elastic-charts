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

import { common } from '../page_objects';

describe('Bar series stories', () => {
  describe('[test] switch ordinal/linear x axis', () => {
    it('using ordinal x axis', async() => {
      await common.expectChartAtUrlToMatchScreenshot(
        'http://localhost:9001/?path=/story/bar-chart--test-switch-ordinal-linear-axis&knob-scaleType=ordinal',
      );
    });
  });

  describe('[test] discover', () => {
    it('using no custom minInterval', async() => {
      await common.expectChartAtUrlToMatchScreenshot(
        'http://localhost:9001/?path=/story/bar-chart--test-discover&knob-use custom minInterval of 30s=',
      );
    });
  });

  describe('[test] histogram mode (linear)', () => {
    describe('enableHistogramMode is true', () => {
      it('rotation - 0', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=0&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - negative 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=-90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 180', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=180&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
    });

    describe('enableHistogramMode is false', () => {
      it('rotation - 0', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=0&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - negative 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=-90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 180', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=180&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=line&knob-point series alignment=center&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
    });

    describe('point alignment', () => {
      it('start', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=-90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=area&knob-point series alignment=start&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
      it('center', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=-90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=area&knob-point series alignment=center&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
      it('end', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-linear&knob-chartRotation=-90&knob-bars padding=0.25&knob-histogram padding=0.05&knob-other series=area&knob-point series alignment=end&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=&knob-bars-2 enableHistogramMode=',
        );
      });
    });
  });

  describe('[test] histogram mode (ordinal)', () => {
    describe('enableHistogramMode is false, hasHistogramBarSeries is false', () => {
      it('rotation - 0', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=0&knob-bars padding=0.25&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=90&knob-bars padding=0.25&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - negative 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=-90&knob-bars padding=0.25&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 180', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=180&knob-bars padding=0.25&knob-hasHistogramBarSeries=&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
    });

    describe('enableHistogramMode is true, hasHistogramBarSeries is true', () => {
      it('rotation - 0', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=0&knob-bars padding=0.25&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=90&knob-bars padding=0.25&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - negative 90', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=-90&knob-bars padding=0.25&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
      it('rotation - 180', async() => {
        await common.expectChartAtUrlToMatchScreenshot(
          'http://localhost:9001/?path=/story/bar-chart--test-histogram-mode-ordinal&knob-chartRotation=180&knob-bars padding=0.25&knob-hasHistogramBarSeries=true&knob-debug=true&knob-bars-1 enableHistogramMode=true&knob-bars-2 enableHistogramMode=',
        );
      });
    });
  });
});
