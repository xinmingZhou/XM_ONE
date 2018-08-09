import React, {Component} from 'react';
import { 
  View,
} from 'react-native';
import ImageButton from "./ImageButton";

const images = {
  search: require('../Images/icon_search.png'),
}

export default class SearchButton  extends Component {
  render() {
    return (
      <ImageButton style={this.props.style} source={images.search} onPress={() => this.searchOnPress()} /> 
    )
  }

  searchOnPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
}