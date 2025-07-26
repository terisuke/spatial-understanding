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

import {DetectTypes} from './Types';

export const get2dPrompt = (
  prompts: Record<DetectTypes, string[]>,
  targetPrompt: string
): string => {
  return `${prompts['2D bounding boxes'][0]} ${targetPrompt || prompts['2D bounding boxes'][1]} ${prompts['2D bounding boxes'][2]}`;
};

export const getSegmentationPrompt = (
  prompts: Record<DetectTypes, string[]>,
  segmentationLanguage: string,
  labelPrompt: string
): string => {
  return `${prompts['Segmentation masks'][0]} ${segmentationLanguage || prompts['Segmentation masks'][1]} ${prompts['Segmentation masks'][2]} ${labelPrompt || prompts['Segmentation masks'][3]} ${prompts['Segmentation masks'][4]}`;
};

export const getGenericPrompt = (
  prompts: Record<DetectTypes, string[]>,
  detectType: DetectTypes
): string => {
  return prompts[detectType].join(' ');
};

export const parseJsonResponse = (response: string): any => {
  if (response && response.includes('```json')) {
    response = response.split('```json')[1].split('```')[0];
  }
  return JSON.parse(response || '[]');
};