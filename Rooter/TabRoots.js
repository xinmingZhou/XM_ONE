import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
  YellowBox
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScene from "../Scene/HomeScene";
import AllScene from "../Scene/AllScene";
import MeScene from "../Scene/MeScene";
import SettingScene from "../Scene/SettingScene";
import LoginScene from "../Scene/LoginScene";

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
console.ignoredYellowBox = ['Remote debugger'];

const tabImgs = {
  tabHome: {
    normalImage: require('../Images/homeUnselectedV4.png'),
    selectedImage: require('../Images/homeSelectedV4.png')
  },
  tabAll: {
    normalImage: require('../Images/allUnselectedV4.png'),
    selectedImage: require('../Images/allSelectedV4.png')
  },
  TabMe: {
    normalImage: require('../Images/meUnselectedV4.png'),
    selectedImage: require('../Images/meSelectedV4.png')
  },
  naviBackImage: require('../Images/back_dark.png'),
}



// 配置导航栈
// const HomeStack = createStackNavigator({
//   Home: HomeScene,
  
// },{
//     // 这里设置整个导航栈的统一样式
//     // initialRouteName: 'Home',
//     /* The header config from HomeScreen is now here */
//     // navigationOptions: {
//     //   headerStyle: {
//     //     // backgroundColor: '#f4511e',
//     //   },
//     //   headerTintColor: '#fff',
//     //   headerTitleStyle: {
//     //     fontWeight: 'bold',
//     //   },
//     // },
  
// });

const AllStack = createStackNavigator({
  All: AllScene,
},{
  navigationOptions: {}
});
 
// const MeStack = createStackNavigator({
//   Me: MeScene,
//   Setting: SettingScene,
// },{
//   navigationOptions: { // 自定义这个路由栈的样式
//     headerBackTitle: null,
//     headerBackImage: <Image source = {tabImgs.naviBackImage} style = {{marginLeft: 10}} />

//   }
// });

// 注册 Tabs
const tabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScene, 
  },
  All: {
    screen: AllStack,
  },
  Me: {
    screen: MeScene,
  }
}, 
{
  navigationOptions: ({ navigation }) => ({
    // focused 是否在选中状态
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = focused ? tabImgs.tabHome.selectedImage : tabImgs.tabHome.normalImage;
      } 
      if (routeName === 'All') {
        iconName = focused ? tabImgs.tabAll.selectedImage : tabImgs.tabAll.normalImage;
      }
      if (routeName === 'Me') {
        iconName = focused ? tabImgs.TabMe.selectedImage : tabImgs.TabMe.normalImage;
      }
      return <Image source = {iconName} ></Image>
    },
  }),
  tabBarOptions: {
    showLabel: false,
  },
}
)

// StackNavigator 包含 BottomTabNavigator 的方式
export default createStackNavigator ({
  Home: {screen: tabNavigator, navigationOptions : {header: null}},
  Setting: {screen: SettingScene},
  Login: LoginScene
},{
    navigationOptions: {
      headerBackTitle: null,
      headerBackImage: <Image source = {tabImgs.naviBackImage} style = {{marginLeft: 10}} />
  
}
})



