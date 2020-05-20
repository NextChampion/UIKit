/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-05-15 18:10:06
 * @LastEditTime: 2020-05-20 22:33:56
 * @LastEditors: zhangcunxia
 * @Description:
 */
import {ViewStyle, ViewProps} from 'react-native';

export interface BtnProps extends ViewProps {
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'primary' | 'normal' | 'ghost';
  block?: boolean;
  shape?: 'normal' | 'circle';
  size?: 'large' | 'normal' | 'small';
  style?: ViewStyle;
}
