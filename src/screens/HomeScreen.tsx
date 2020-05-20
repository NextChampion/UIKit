/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-05-20 23:52:14
 * @LastEditTime: 2020-05-21 00:28:33
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React, {memo} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ComponentList, ListItem} from '../compoments';
import {Color} from 'Theme';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  navigation: any;
}
const HomeScreen: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  function onClick(title: string) {
    navigation.navigate(title, {title});
  }

  function renderItem({item}: {item: ListItem}) {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => onClick(item.title)}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList data={ComponentList} renderItem={renderItem} />
    </View>
  );
};

export default memo(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  listItem: {
    borderBottomWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: Colors.dark,
  },
});
