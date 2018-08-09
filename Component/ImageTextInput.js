import React, {Component} from 'react';
import {
  View, 
  Text,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';
import BorderLine from "./BorderLine";

export default class ImageTextInput extends Component {
  constructor(props) {
    super(props);

  }

  onChangeText(value) {
    if (this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]} >
        <Image source={this.props.source} style={[styles.image, this.props.imageStyle]} ></Image>
        <TextInput 
          style={[styles.textInput, this.props.textInputStyle]}
          placeholder= {this.props.placeholder}
          placeholderTextColor={this.props.placeholderTextColor}
          onChangeText={(value) => this.onChangeText(value)}
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
          password={this.props.password}
          ></TextInput>
        
      </View>
    )
  }



}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // backgroundColor: "gray",
    width: 280,
    alignSelf: "center"
  },
  image: {
    width: 22,
    height: 22,
    marginLeft: 16,
    alignSelf: "center"
  },
  textInput: {
    height:40,
    width: 180,
    marginLeft: 20,
    alignSelf: "center",
    

  },

})