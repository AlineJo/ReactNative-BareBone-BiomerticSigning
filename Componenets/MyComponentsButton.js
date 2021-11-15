import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native'
import MyGlobalStyles from '../Global/MyGlobalStyles';


const MyComponenetButton = props => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ ...MyGlobalStyles.buttonContainer, ...props.buttonStyle  }}>
            <View>
                <Text style={MyGlobalStyles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>);
};



export default MyComponenetButton;