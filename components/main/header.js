import React, { Component } from 'react';
import {Header} from 'react-native-elements';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,}from 'react-native';
import { withNavigation } from 'react-navigation';

class HeaderBar extends Component {
  render() {
    return (
        <Header
            leftComponent={{onPress: (gogo) => gogo, icon: this.props.icon, color: '#fff' }}
            centerComponent={{text: this.props.title, style: { color: '#fff' }}}
            rightComponent={{ icon: 'shopping-cart', color: '#fff', onPress: () => this.props.navigation.navigate('Cart') }}
        />
    )
  }
}

export default withNavigation(HeaderBar);