import React, {memo, ReactNode} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ViewProps,
} from 'react-native';

export interface BtnProps extends ViewProps {
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  type?: 'primary' | 'normal' | 'ghost';
  block?: boolean;
  shape?: 'normal' | 'circle';
  size?: 'large' | 'normal' | 'small';
  style?: ViewStyle;
  children?: ReactNode;
}

function Button(props: BtnProps) {
  const {
    title,
    disabled,
    type,
    block,
    shape,
    size,
    style,
    onPress,
    children,
  } = props;
  const containetStyle = [
    styles[`${type}Type`],
    styles[`${size}Size`],
    styles[`${shape}Shape`],
    block && styles.block,
    style,
  ];
  return (
    <TouchableOpacity
      disabled={disabled}
      style={containetStyle}
      onPress={onPress}>
      {children || <Text> {title} </Text>}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  disabled: false,
  onPress: null,
  type: 'normal',
  block: false,
  shape: 'normal',
  size: 'normal',
  style: null,
};

export default memo(Button);

interface ButtonStyles {
  container: ViewStyle;
  largeSize: ViewStyle;
  normalSize: ViewStyle;
  smallSize: ViewStyle;
  primaryType: ViewStyle;
  normalType: ViewStyle;
  ghostType: ViewStyle;
  normalShape: ViewStyle;
  circleShape: ViewStyle;
  block: ViewStyle;
  [propName: string]: ViewStyle;
}
const styles = StyleSheet.create<ButtonStyles>({
  container: {},
  largeSize: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignSelf: 'center',
  },
  normalSize: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    alignSelf: 'center',
  },
  smallSize: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignSelf: 'center',
  },
  primaryType: {
    backgroundColor: 'green',
  },
  normalType: {
    backgroundColor: 'red',
  },
  ghostType: {
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'green',
  },
  normalShape: {
    borderRadius: 5,
  },
  circleShape: {
    borderRadius: 10,
  },
  block: {
    width: '100%',
  },
});
