import React, {Component} from 'react';
import { 
  Text, 
  View,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  ImageBackground
} from 'react-native';

const images = {
  loginCircleBg: require('../Images/Me/loginCircleBg.png'),
  loginOne: require('../Images/Me/loginOne.png'),
}

export default class LoginBTn extends Component {
  render() {
    return (
      <View style={this.props.style} >
        <TouchableWithoutFeedback 
          onPress={() => this.onPress()} >
          <View style={{}} >
            <ImageBackground  
             style={styles.loginCircleBg} 
             source={images.loginCircleBg} >
             <Text style={styles.loginText} >登录</Text>
             <Image source={images.loginOne} style={styles.loginOne} />
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  onPress() {
    if(this.props.onPress)
        this.props.onPress();
  }
}

const styles = StyleSheet.create({
  loginCircleBg: {
    width: 98,
    height: 98,
    alignItems: 'center'
  },
  loginOneBg: {
  },
  loginText: {
    color: 'white',
    fontSize: 17,
    marginTop: 28
  },
  loginOne: {
    marginTop: 8
  },
})
