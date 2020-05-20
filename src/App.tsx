/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './navigator/index';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const App: React.FC<Props> = () => {
  return <Navigator />;
};

export default App;
