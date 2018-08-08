import React, {Component} from 'react';
import { 
  Image,
  TouchableOpacity
} from 'react-native';

export default class ImageButton extends Component {
  constructor(props) {
    super(props);

  }
  
  onPress() {
    if(this.props.onPress)
        this.props.onPress();
  }

  render() {
    return (
      <TouchableOpacity 
        style={this.props.style}
        onPress={() =>this.onPress()} >
        <Image 
          source = {this.props.source} >
        </Image>
      </TouchableOpacity>

    )
  }
}