// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {readFileSync} from 'fs';
import {resolve} from 'path';
import snapshot = require('snap-shot-it');
import {describe, it} from 'mocha';
import {PackageLockJson} from '../../src/updaters/node/package-lock-json';
import {Version} from '../../src/version';

const fixturesPath = './test/updaters/fixtures';

describe('PackageLockJson', () => {
  describe('updateContent v1', () => {
    it('updates the package version', async () => {
      const oldContent = readFileSync(
        resolve(fixturesPath, './package-lock-v1.json'),
        'utf8'
      );
      const packageJson = new PackageLockJson({
        version: Version.parse('14.0.0'),
      });
      const newContent = packageJson.updateContent(oldContent);
      snapshot(newContent.replace(/\r\n/g, '\n'));
    });
  });

  describe('updateContent v2', () => {
    it('updates the package version', async () => {
      const oldContent = readFileSync(
        resolve(fixturesPath, './package-lock-v2.json'),
        'utf8'
      );
      const packageJson = new PackageLockJson({
        version: Version.parse('14.0.0'),
      });
      const newContent = packageJson.updateContent(oldContent);
      snapshot(newContent.replace(/\r\n/g, '\n'));
    });
  });

  describe('updateContent v3', () => {
    it('updates the package version', async () => {
      const oldContent = readFileSync(
        resolve(fixturesPath, './package-lock-v3.json'),
        'utf8'
      );
      const packageJson = new PackageLockJson({
        version: Version.parse('14.0.0'),
      });
      const newContent = packageJson.updateContent(oldContent);
      snapshot(newContent.replace(/\r\n/g, '\n'));
    });
  });

  describe('updateContent v3 monorepo', () => {
    it('updates the package version', async () => {
      const oldContent = readFileSync(
        resolve(fixturesPath, './package-lock-v3-workspace.json'),
        'utf8'
      );
      const versionsMap = new Map();
      versionsMap.set('release-please-foo', new Version(2, 0, 0));
      versionsMap.set('release-please-bar', new Version(3, 0, 0));
      const packageJson = new PackageLockJson({
        version: Version.parse('14.0.0'),
        versionsMap,
      });
      const newContent = packageJson.updateContent(oldContent);
      snapshot(newContent.replace(/\r\n/g, '\n'));
    });
  });
});
