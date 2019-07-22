import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
/**
 * TODO Wrap Component
 */
export default () => (Wrap) => {
    @withNavigation
    class WrapperComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
        }

        render() {
            return <View style={{ flex: 1, backgroundColor: 'white' }}>
                {/* <StatusBar barStyle={'light-content'} translucent backgroundColor={} /> */}
                <Wrap
                    {...this.props}
                    {...this.state}
                />

            </View>
        }
    }

    return WrapperComponent
}


