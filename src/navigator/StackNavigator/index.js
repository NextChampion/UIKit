/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-05-20 23:32:27
 * @LastEditTime: 2020-05-21 00:30:02
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/HomeScreen';
import ComponentScreen from 'screens/ComponentScreen';
import ButtonScreen from 'screens/ButtonScreen';
import TextScreen from 'screens/TextScreen';

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={ComponentScreen} />
      <Stack.Screen name="Button" component={ButtonScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
    </Stack.Navigator>
  );
}

export default React.memo(StackNavigator);
