import React from 'react';

import {
    Dimensions,
    StyleSheet,
} from 'react-native';
import MyColors from './MyColors';

const MyGlobalStyles = StyleSheet.create({

    root: {
        flex: 1,
        backgroundColor: MyColors.colorPrimary,
    },

    content: {
        flex: 1,
        backgroundColor: MyColors.colorBackground,
        marginTop: Dimensions.get('window').height * 0.05,
        paddingTop: Dimensions.get('window').height * 0.015,
        paddingStart: Dimensions.get('window').width * 0.02,
        paddingEnd: Dimensions.get('window').width * 0.02,
        paddingBottom: Dimensions.get('window').height * 0.015,
    },

    buttonContainer: {
        minHeight: 38,
        minWidth: 100,
        paddingVertical: 8,
        paddingHorizontal:16,
        marginStart: 8,
        marginEnd: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyColors.colorPrimary,
        borderRadius: 4,
    },

    buttonText: {
        color: MyColors.colorWhite,
        fontWeight: 'bold',
    },


});

export default MyGlobalStyles