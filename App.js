/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * referance : https://www.npmjs.com/package/react-native-biometrics
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyComponentRootView from './Componenets/MyComponentRootView';

//biometrics
import ReactNativeBiometrics from 'react-native-biometrics'
import MyComponenetButton from './Componenets/MyComponentsButton';
import MyColors from './Global/MyColors';

const App = () => {

  // you can use this later if you want you want to check
  let isBiometricsSupported

  //this function will run automatically once App.js is loaded
  ReactNativeBiometrics.isSensorAvailable()
    .then((resultObject) => {
      const { available, biometryType } = resultObject

      if (available && biometryType === ReactNativeBiometrics.TouchID) {
        isBiometricsSupported = false;
        console.log('TouchID is supported')
      } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
        isBiometricsSupported = false
        console.log('FaceID is supported')
      } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
        isBiometricsSupported = true
        console.log('Biometrics is supported')
        
        //comment this call if you don't want to show the propt automatically!
        //showBiometricPrompt()
      } else {
        isBiometricsSupported = false
        console.log('Biometrics not supported')
      }
    })

  // referance : https://www.npmjs.com/package/react-native-biometrics#simplepromptoptions  
  const showBiometricPrompt = () => {
    ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
      .then((resultObject) => {
        const { success } = resultObject

        if (success) {
          console.log('successful biometrics provided')
        } else {
          console.log('user cancelled biometric prompt')
        }
      })
      .catch(() => {
        console.log('biometrics failed')
      })
  }

  return (
    <MyComponentRootView>
      <View style={styles.root}>
        <Text style={styles.text}>Biometric Sample App</Text>
        <MyComponenetButton text='Show Biometric Prompt' buttonStyle={styles.buttonStyle} onPress={showBiometricPrompt} />
      </View>
    </MyComponentRootView>
  );

}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold'
  },

  buttonStyle: {
    marginTop: 16,
    backgroundColor: MyColors.colorPrimary,
  }

});


export default App;
