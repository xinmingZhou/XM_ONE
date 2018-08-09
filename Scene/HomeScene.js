import React, {Component} from 'react';
import { 
  Text, 
  View,
  Button
} from 'react-native';

export default class HomeScene extends Component {
  static navigationOptions = {
    title: 'Home',
    /* No more header config here! */
  };


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
      </View>
    );
  }
}