import React, {Component} from 'react';
import {
  View, 
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import BorderLine from "./BorderLine";

export default class TextButton extends Component {
  constructor(props) {
    super(props);

  }
  onPress() {
    if (this.props.onPress) {
      this.props.onPress()
    }
  }

  render() {
    return (
      <View style={[{width: 100},this.props.style]} >
        <TouchableWithoutFeedback onPress={() => this.onPress()} >
        <View>
          <Text style={[this.props.textStyle]} >{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
      <BorderLine style={[{alignSelf: "flex-end", width: 30, marginRight: 2, backgroundColor: "#494949"}, this.props.lineStyle]} />
      </View>
      
    )
  }

}