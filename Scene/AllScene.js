import React, {Component} from 'react';
import { 
  Text, 
  View,
  Image
} from 'react-native';

class ImageHeaderTitle extends Component {
  render() {
    return (
      <Image source = {require('../Images/all_title_view.png')}/>
    );
  }
}


export default class AllScene extends Component {

  static navigationOptions = {
    headerTitle: <ImageHeaderTitle />,
  };
  
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>All!</Text>
      </View>
    );
  }
}