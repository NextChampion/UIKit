import React, {memo, ReactNode} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ViewProps,
  TextStyle,
} from 'react-native';
import {Color} from 'Theme';

export interface BtnProps extends ViewProps {
  title?: string;
  disabled?: boolean;
  onPress?: () => void;
  type?: 'primary' | 'danger' | 'ghost';
  block?: boolean;
  shape?: 'normal' | 'circle';
  size?: 'large' | 'normal' | 'small';
  style?: ViewStyle;
  titleStyle?: TextStyle;
  children?: ReactNode;
}

function Button(props: BtnProps) {
  const {
    title,
    titleStyle,
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
      {children || <Text style={[styles.title, titleStyle]}> {title} </Text>}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  disabled: false,
  onPress: null,
  type: 'primary',
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
  dangerType: ViewStyle;
  ghostType: ViewStyle;
  normalShape: ViewStyle;
  circleShape: ViewStyle;
  block: ViewStyle;
  title: TextStyle;
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
    backgroundColor: Color.primary,
  },
  dangerType: {
    backgroundColor: Color.danger,
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
  title: {
    alignSelf: 'center',
    alignContent: 'center',
    color: Color.white,
  },
});
