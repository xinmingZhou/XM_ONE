import React, {Component} from 'react';
import { 
  Text, 
  View,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import ImageButton from "../Component/ImageButton";
import SearchButton from "../Component/SearchButton";

class ImageHeaderTitle extends Component {
  render() {
    return (
      <Image source = {require('../Images/all_title_view.png')}/>
    );
  }
}

export default class AllScene extends Component {

  static navigationOptions = ({navigation,screenProps})=> ({
    headerTitle: <ImageHeaderTitle />,
    headerRight: <SearchButton style={{marginRight: 16}} onPress={() => {
      navigation.navigate('Setting')
    }} />
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>All!</Text>
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
})