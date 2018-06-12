import React, { Component } from 'react';
import {Header} from 'react-native-elements';

export default class HeaderBar extends Component {
  render() {
    return (
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: this.props.title, style: { color: '#fff' }}}
            rightComponent={{ icon: 'shopping-cart', color: '#fff' }}
        />
    )
  }
}