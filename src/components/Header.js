import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import { withNavigation } from 'react-navigation'
import { TouchableOpacity, Text } from 'react-native';
import { normalize } from '../functions';

export const HeaderBack = withNavigation(({ navigation }) => {
    return <TouchableOpacity onPress={() => navigation.goBack(null)} style={{ paddingLeft: normalize(10), fontSize: normalize(20) }}>
        <Text>{'กลับ'}</Text>
    </TouchableOpacity>
})


/**
 *
 */