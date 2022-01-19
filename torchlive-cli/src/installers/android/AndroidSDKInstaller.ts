/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import Zip from 'adm-zip';
import fs from 'fs';
import path from 'path';
import tmp from 'tmp';
import {getDefaultSDKPath, getSDKPath} from '../../android/AndroidSDK';
import {TaskContext} from '../../task/Task';
import {downloadFile} from '../../utils/FileUtils';
import {execCommand, isLinux, isMacOS, platform} from '../../utils/SystemUtils';
import {
  IInstallerTask,
  getInstallerErrorMitigationMessage,
  getUserConsentOnInstallerOrQuit,
} from '../IInstaller';

export default class AndroidSDKInstaller implements IInstallerTask {
  _possibleSdkManagerFilepaths = [
    'cmdline-tools/bin/sdkmanager',
    'tools/bin/sdkmanager',
  ];

  isValid(): boolean {
    return isMacOS();
  }

  getDescription(): string {
    return 'Android SDK';
  }

  isInstalled(): boolean {
    const sdkPath = getSDKPath();
    if (sdkPath !== null) {
      return this._possibleSdkManagerFilepaths.some(sdkManagerFilepath =>
        fs.existsSync(path.join(sdkPath, sdkManagerFilepath)),
      );
    }
    return false;
  }

  mitigateOnError(): string {
    return getInstallerErrorMitigationMessage(
      this,
      'https://developer.android.com/studio',
    );
  }

  async run(context: TaskContext): Promise<void> {
    context.update('Installing cmdline-tools');
    const cltPath = await this.downloadCommandLineTools();
    const sdkManager = path.join(cltPath, this._possibleSdkManagerFilepaths[0]);

    const sdkRoot = getDefaultSDKPath();

    // Ask for user consent if accept all option is false or unset.
    if (!context.ctx.yes) {
      await getUserConsentOnInstallerOrQuit(
        this,
        context,
        'https://developer.android.com/studio/terms',
      );
    }

    const basicsCmd = `yes | ${sdkManager} --sdk_root=${sdkRoot} "tools"`;
    await execCommand(context, basicsCmd);
    context.update(`Installed ${this.getDescription()}`);
  }

  private downloadCommandLineTools(): Promise<string> {
    return new Promise((resolve, reject) => {
      let type: string;
      if (isMacOS()) {
        type = 'mac';
      } else if (isLinux()) {
        type = 'linux';
      } else {
        throw new Error(`platform ${platform} unsupported`);
      }

      const url = `https://dl.google.com/android/repository/commandlinetools-${type}-6858069_latest.zip`;

      tmp.dir((dirError, dirPath, _dirCleanupCallback) => {
        if (dirError) {
          reject(dirError);
          return;
        }
        tmp.file(async (fileError, filePath, _fd, cleanupCallback) => {
          if (fileError) {
            reject(fileError);
            return;
          }
          await downloadFile(url, filePath);
          const zip = new Zip(filePath);
          zip.extractAllTo(dirPath, true);

          fs.chmod(
            path.join(dirPath, this._possibleSdkManagerFilepaths[0]),
            0o755,
            chmodError => {
              if (chmodError) {
                reject(chmodError);
                return;
              }

              // If we don't need the file anymore we could manually call the cleanupCallback
              // But that is not necessary if we didn't pass the keep option because the library
              // will clean after itself.
              cleanupCallback();
              resolve(dirPath);
            },
          );
        });
      });
    });
  }
}
