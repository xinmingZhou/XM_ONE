import React, {Component} from 'react';
import { 
  Text,
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const images = {
  buttonBg: require("../Images/Login/btn_login_black.png")
}

var {height, width} = Dimensions.get("window")

export default class Button extends Component {
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
        style={[styles.container, this.props.style]}
        onPress={() => this.onPress()}
        activeOpacity={0.8} >
        <View style={{}} >
          <ImageBackground source = {images.buttonBg} style={{height: 40, }} >
            <Text style={[styles.text, this.props.textStyle]} >{this.props.text? this.props.text: "Button"}</Text>
          </ImageBackground>
        </View>
        
      </TouchableOpacity>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    alignSelf: "center",
    justifyContent:'center',

  },
  text: {
    alignSelf: "center",
    color: "#fff",
    marginTop: 10
  }
})