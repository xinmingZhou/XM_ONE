import React, {Component} from 'react';
import { 
  Text, 
  View,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';

import ImageButton from "../Component/ImageButton";
import BorderLine from "../Component/BorderLine";
import TextButton from "../Component/TextButton";
import LoginButton from "../Component/LoginButton";

var {height, width} = Dimensions.get('window')
const images = {
  setting: require('../Images/Me/user_center_setting_n.png'),
  third_wx: require('../Images/Me/thirdwechat.png'),
  third_weibo: require('../Images/Me/thirdweibo.png'),
  third_qq: require('../Images/Me/thirdqq.png'),
  loginBg: require('../Images/Me/loginBg.png'),
}

export default class MeScene extends Component {
  static navigationOptions = ({navigation,screenProps}) => ({
    // header: (navigation.state.params && navigation.state.params.showBar)?<View style={{height:50,backgroundColor:'green'}}></View>:null,
    header: null
  });

  componentDidMount() {
    // console.log(this.props.navigation);
    
  }
  settingOnPress() {
    // this.props.navigation.setParams({
    //   showBar:true
    // })

    this.props.navigation.navigate('Setting')
  }
  loginButtonOnPress() {
    this.props.navigation.navigate('Login')
  }

  registerOnPress() {
    alert("点击了注册")
  }
  serviceOnPress() {
    alert("serviceOnPress")
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground  
          style={styles.loginBg} 
          source={images.loginBg} >
          <ImageButton 
            style={styles.setting}
            source={images.setting} 
            onPress={() => this.settingOnPress()} />
        </ImageBackground>
        <LoginButton style={{alignItems: 'center', marginTop: -10}} 
          onPress={() => this.loginButtonOnPress()} ></LoginButton>
        <TextButton 
          style={styles.registerBtn}
          textStyle={{color: "#494949"}}
          onPress={() => this.registerOnPress()}
          text="还没有账号？ 点击注册" >
        </TextButton>
        <View style={styles.thirdView} >
          <ImageButton 
            style={{marginLeft: 30}}
            source={images.third_wx} 
            onPress={() => this.settingOnPress()} />
          <ImageButton 
            style={{}}
            source={images.third_weibo} 
            onPress={() => this.settingOnPress()} />
          <ImageButton 
            style={{marginRight: 30}}
            source={images.third_qq} 
            onPress={() => this.settingOnPress()} />
        </View>
        <View style={styles.serviceProtocol} >
        <TouchableWithoutFeedback onPress={() => this.serviceOnPress()} >
          <View style={{flexDirection: 'row'}} >
            <Text style={{fontSize: 12, color: "gray"}} >创建账号即代表您同意</Text>
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
  setting: {
    marginLeft: 16,
    marginTop: 36,
  },
  loginBg: {
    height: height*0.4,
    width: width,
  },
  registerBtn: {
    marginTop: 50, 
    width: 150, 
    alignSelf: "center"
  },
  thirdView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 110
  },
  serviceProtocol: {
    marginTop: 20, 
    alignSelf: "center"
  }
})