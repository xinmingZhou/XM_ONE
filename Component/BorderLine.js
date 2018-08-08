import React, { Component } from 'react';
import {
  View,
  PixelRatio,
  StyleSheet
} from 'react-native';

export default class BorderLine extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(){
    return false;
  }

  // getStyle (){
  //   return {
  //     height: 1 / PixelRatio.get(),
  //     backgroundColor: global.theme.color.contentBgColor_lightGray,
  //     marginLeft: 10,
  //     marginRight:10,
  //   };
  // }

  render() {
    return (
      <View style={[styles.lineView, this.props.style]}></View>
    );
  }
}

const styles = StyleSheet.create({
   lineView: {
    height: 1 / PixelRatio.get(),
    backgroundColor: '#CFCFCF',
    marginLeft: 10,
    marginRight: 10,
   }
})