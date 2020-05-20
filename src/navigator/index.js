/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-05-20 23:32:12
 * @LastEditTime: 2020-05-20 23:55:00
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

function Navigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default React.memo(Navigator);
