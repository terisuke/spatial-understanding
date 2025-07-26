/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  BoundingBox2DType,
  BoundingBox3DType,
  BoundingBoxMaskType,
} from './Types';
import {PointingType} from './atoms';

export const process2DBoundingBoxes = (parsedResponse: any): BoundingBox2DType[] => {
  return parsedResponse.map(
    (box: {box_2d: [number, number, number, number]; label: string}) => {
      const [ymin, xmin, ymax, xmax] = box.box_2d;
      return {
        x: xmin / 1000,
        y: ymin / 1000,
        width: (xmax - xmin) / 1000,
        height: (ymax - ymin) / 1000,
        label: box.label,
      };
    }
  );
};

export const processSegmentationMasks = (parsedResponse: any): BoundingBoxMaskType[] => {
  return parsedResponse.map(
    (mask: {
      box_2d: [number, number, number, number];
      label: string;
      mask: string;
    }) => {
      const [ymin, xmin, ymax, xmax] = mask.box_2d;
      return {
        x: xmin / 1000,
        y: ymin / 1000,
        width: (xmax - xmin) / 1000,
        height: (ymax - ymin) / 1000,
        label: mask.label,
        imageData: mask.mask,
      };
    }
  );
};

export const process3DBoundingBoxes = (parsedResponse: any): BoundingBox3DType[] => {
  return parsedResponse.map(
    (box: {
      box_3d: {
        center: [number, number, number];
        size: [number, number, number];
        rpy: [number, number, number];
      };
      label: string;
    }) => ({
      center: box.box_3d.center,
      size: box.box_3d.size,
      rpy: box.box_3d.rpy,
      label: box.label,
    })
  );
};

export const processPoints = (parsedResponse: any): PointingType[] => {
  return parsedResponse.map(
    (point: {point: [number, number]; label: string}) => ({
      point: {
        x: point.point[0] / 1000,
        y: point.point[1] / 1000,
      },
      label: point.label,
    })
  );
};