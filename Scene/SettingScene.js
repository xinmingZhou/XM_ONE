import React, {Component} from 'react';
import { 
  Text, 
  View 
} from 'react-native';

export default class SettingScreen extends Component {
  static navigationOptions = {
    title: "设置",
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting!</Text>
      </View>
    );
  }
}