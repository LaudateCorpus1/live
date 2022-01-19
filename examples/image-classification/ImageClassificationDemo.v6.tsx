/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Camera, Image, MobileModel} from 'react-native-pytorch-core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const model = require('../../models/mobilenet_v3_small.ptl');

type ImageClassificationResult = {
  maxIdx: number;
  confidence: number;
};

const ImageClasses = require('../MobileNetV3Classes');

export default function ImageClassificationDemo() {
  // Get safe area insets to account for notches, etc.
  const insets = useSafeAreaInsets();

  // Component state that holds the detected object class
  const [objectClass, setObjectClass] = React.useState<string>('');

  async function handleImage(image: Image) {
    const {result} = await MobileModel.execute<ImageClassificationResult>(
      model,
      {
        image,
      },
    );

    // Get max index (argmax) result to resolve the top class name
    const topClass = ImageClasses[result.maxIdx];

    // Set object class state to be the top class detected in the image
    setObjectClass(topClass);

    // It is important to release the image to avoid memory leaks
    image.release();
  }

  return (
    <View
      style={[
        styles.container,
        {marginTop: insets.top, marginBottom: insets.bottom},
      ]}>
      <Text style={styles.label}>Object: {objectClass}</Text>
      <Camera style={styles.camera} onCapture={handleImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexGrow: 1,
    padding: 20,
  },
  label: {
    marginBottom: 10,
  },
  camera: {
    flexGrow: 1,
    width: '100%',
  },
});
