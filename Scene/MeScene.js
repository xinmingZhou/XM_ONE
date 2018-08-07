import React, {Component} from 'react';
import { 
  Text, 
  View,
  Image,
  Button
} from 'react-native';


export default class MeScene extends Component {
  static navigationOptions = {
    headerTitle: 'me',

  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Me!</Text>
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
      </View>
    );
  }
}