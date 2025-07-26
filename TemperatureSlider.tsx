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

import React from 'react';

interface TemperatureSliderProps {
  temperature: number;
  setTemperature: (value: number) => void;
  isLoading: boolean;
}

export function TemperatureSlider({
  temperature,
  setTemperature,
  isLoading,
}: TemperatureSliderProps) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="temperature">Temperature</label>
      <input
        id="temperature"
        className="w-12"
        type="number"
        min="0"
        max="2"
        step="0.1"
        value={temperature}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTemperature(Number(e.target.value))}
        disabled={isLoading}
      />
      <input
        type="range"
        min="0"
        max="2"
        step="0.1"
        value={temperature}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTemperature(Number(e.target.value))}
        disabled={isLoading}
        className="w-40"
      />
    </div>
  );
}