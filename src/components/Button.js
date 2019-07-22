import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { normalize } from '../functions';
import { color } from '../resource';

// function
// (props) => {props.title, props.onPress}
export const ButtonMain = ({ title, onPress = () => alert('default'), containerStyle }) => {
    const [count, setCount] = useState(0)
    return <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>กด {count}</Text>
    </TouchableOpacity>
}
