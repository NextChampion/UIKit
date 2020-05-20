import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {BtnProps} from './style';

function Button(props: BtnProps) {
  const {title} = props;
  return (
    <View>
      <Text> {title} </Text>
    </View>
  );
}

Button.defaultProps = {
  title: '',
  disabled: false,
  onClick: null,
  type: 'normal',
  block: false,
  shape: 'normal',
  size: 'normal',
};
export default memo(Button);
