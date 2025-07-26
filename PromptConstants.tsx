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

export const MODEL_CONFIG = {
  DEFAULT_MODEL: 'models/gemini-2.5-flash' as string,
  MODEL_3D: 'models/gemini-2.0-flash' as string,
  THINKING_BUDGET_DISABLED: 0,
} as const;

export const IMAGE_CONFIG = {
  MIME_TYPE: 'image/png',
  DATA_PREFIX: 'data:image/png;base64,',
} as const;

export const RESPONSE_PARSING = {
  JSON_DELIMITER: '```json',
  DELIMITER_END: '```',
} as const;