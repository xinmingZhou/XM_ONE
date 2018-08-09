import React, {Component} from 'react';
import { 
  Text, 
  View,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
import ImageButton from "../Component/ImageButton";
import ImageTextInput from "../Component/ImageTextInput";
import BorderLine from "../Component/BorderLine";
import TextButton from "../Component/TextButton";
import Button from "../Component/Button";


var {height, width} = Dimensions.get('window')
const images = {
  headerImage: require("../Images/Login/login_headerImage.png"),
  headerOne: require("../Images/Login/login_headerOne.png"),
  naviBackImage: require('../Images/Login/back_white.png'),
  username: require('../Images/Login/login_username.png'),
  password: require('../Images/Login/login_password.png'),
}


export default class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    }
  }

  static navigationOptions = {
    header: null,
  };

  naviBackOnPress() {
    this.props.navigation.goBack()
  }

  loginUsernameValue(value) {    
    this.setState({
      username: value
    })
    
  }
  passwordValue(value) {
    this.setState({
      password: value
    })
  }

  forgetOnPress() {
    alert("forgetOnPress")

  }

  loginButtonOnPress() {
    alert(this.state.username+" "+this.state.password)
  }

  registerOnPress() {
    alert("registerOnPress")
  }
  serviceOnPress() {
    alert("serviceOnPress")
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground  
          style={styles.headerImage} 
          source={images.headerImage} >
          <ImageButton 
            style={styles.naviBack}
            source={images.naviBackImage} 
            onPress={() => this.naviBackOnPress()} />
          <Image style={styles.headerOne} source={images.headerOne} />
        </ImageBackground>
        <View style={{marginTop: 50}} >
          <ImageTextInput 
            source={images.username} 
            placeholder="请输入手机号码"
            onChangeText={(value) => this.loginUsernameValue(value)} >
          </ImageTextInput>
          <BorderLine style={styles.borderLine} />
          <ImageTextInput 
            style={{marginTop: 5}}
            source={images.password} 
            placeholder="请输入密码"
            onChangeText={(value) => this.passwordValue(value)}
            password={true} >
          </ImageTextInput>
          <BorderLine style={styles.borderLine} />
          <TextButton 
            style={{marginLeft: 54,marginTop: 20, width: 72}}
            textStyle={{color: "#494949"}}
            lineStyle={{width:0}}
            text="忘记密码？" 
            onPress={() => this.forgetOnPress()}  ></TextButton>
        </View>

        <Button   
          style={{marginTop: 80, width: width*0.7}}
          text="登  录" 
          onPress={() => this.loginButtonOnPress()} />
        <TextButton 
            style={{marginTop: 20, alignSelf: "center", width: 150,}}
            textStyle={{color: "#494949"}}
            lineStyle={{width:0}}
            text="还没有账号？现在注册" 
            onPress={() => this.registerOnPress()} >
        </TextButton>
        <View style={styles.serviceProtocol} >
        <TouchableWithoutFeedback onPress={() => this.serviceOnPress()} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{fontSize: 12, color: "gray"}} >登录即代表您同意</Text>
            <Text style={{fontSize: 12, color: "#494949"}} >用户服务协议</Text>
          </View>
        </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFFFFF'
  },
  headerImage: {
    height: height*0.26,
    width: width,
  },
  naviBack: {
    marginTop: 26,
    marginLeft: 10
  },
  headerOne: {
    marginTop: 20,
    alignSelf: "center"
  },
  borderLine: {
    marginTop: 5,
    width: 270,
    alignSelf: "center"
  },
  serviceProtocol: {
    marginTop: 120, 
    alignSelf: "center",

  }
})