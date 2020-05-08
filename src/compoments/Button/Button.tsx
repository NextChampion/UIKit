import React, {Component} from 'react';
import {Text, View} from 'react-native';

export interface Props {
  title: string;
  onClick?: () => void;
}

export default class Button extends Component<Props> {
  render() {
    const {title} = this.props;
    return (
      <View>
        <Text> {title} </Text>
      </View>
    );
  }
}
