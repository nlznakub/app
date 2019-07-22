import React, { Component } from 'react';
import { View } from 'react-native';
import { ButtonMain } from '../components/Button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
class SplashActivity extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FontAwesome name={'heart'} />
                <ButtonMain title={'ทดสอบ'} />
            </View>
        );
    }
}

export default SplashActivity