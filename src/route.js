// ผ่าน Login
import React, { Component } from 'react'
import { Text, View, Platform, StatusBar } from 'react-native'
import { normalize } from './functions';
import { color } from './resource';
import { width, height } from './functions/normalize';


export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? normalize(30) : StatusBar.currentHeight;

export function paddingStatus() {
    return Platform.OS === 'ios' ? { height: (height > 812 || width > 812) ? normalize(60) : normalize(50) } :
        Platform.Version >= 20 ?
            { height: StatusBar.currentHeight + normalize(55), borderTopColor: color.main, borderTopWidth: normalize(20) } : null
}

export const navigationOptions = {
    headerStyle: {
        backgroundColor: color.main,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
        borderColor: 'transparent',
        borderWidth: 0,
        elevation: 1,
        paddingVertical: normalize(8),
        ...paddingStatus(),
    },
    headerTextStyle: {
        textAlign: 'center',
        flexGrow: 1
    },
    drawerLockMode: 'locked-open',
    gesturesEnabled: false,
    headerMode: 'screen',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    cardStack: {
        gesturesEnabled: false
    },
}
