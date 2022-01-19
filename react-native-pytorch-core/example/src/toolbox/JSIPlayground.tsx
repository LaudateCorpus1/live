/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

declare var torch: any;
declare var performance: any;

import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';

function argmax(array: number[]): number {
  let max = -Number.MAX_VALUE;
  let ret = -1;
  for (let i = 0; i < array.length; ++i) {
    if (array[i] > max) {
      ret = i;
      max = array[i];
    }
  }
  return ret;
}

export default function JSIPlayground() {
  const [jsResult, setJsResult] = React.useState(0);
  const [cxxResult, setCxxResult] = React.useState(0);
  const [jsElapse, setJsElapse] = React.useState(0);
  const [cxxElapse, setcxxElapse] = React.useState(0);
  const testFunc = async () => {
    console.log('------------');
    console.log(Platform.OS);
    console.log(torch);
    const size = 1500000;
    const tensor = torch.rand(size);
    const data = tensor.data;

    if (data.length < 20) {
      console.log('tensor data', tensor.data);
    }

    let startTime = performance.now();
    let result = argmax(data);
    let delta = performance.now() - startTime;
    setJsResult(result);
    setJsElapse(delta);
    console.log('argmax (js)', result);
    console.log('elapsed time (js)', delta, 'ms');

    startTime = performance.now();
    result = torch.argmax(tensor);
    delta = performance.now() - startTime;
    setCxxResult(result);
    setcxxElapse(delta);
    console.log('argmax (c++)', result);
    console.log('elapsed time (c++)', delta, 'ms');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={testFunc}
        style={styles.button}
        testID="testButton">
        <Text style={styles.buttonTxt}>Test Func</Text>
      </TouchableOpacity>
      <Text>Platform: {Platform.OS}</Text>
      <Text>
        JS returns {jsResult} in {jsElapse} ms.
      </Text>
      <Text>
        C++ returns {cxxResult} in {cxxElapse} ms.
      </Text>
      <Text>
        {jsResult === 0 && jsElapse === 0
          ? 'click to test!'
          : jsResult === cxxResult
          ? 'JSI configured'
          : 'Something wrong'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {
    width: '95%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonTxt: {
    color: 'white',
  },
});
