/**
 * Sample React Native MyComponentRootView
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
} from 'react-native';
import MyGlobalStyles from '../Global/MyGlobalStyles';


const MyComponentRootView = props => {
  return (<View style={MyGlobalStyles.root}>
    <View style={MyGlobalStyles.content}>
      {props.children}
    </View>
  </View>);

}



export default MyComponentRootView;
