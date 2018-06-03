import React, { Component } from 'react';
import {Text,View} from 'react-native';
import Login from './components/user/login';

export default class App extends Component {
  render() {
    return (
      <View>
        <Login/>
      </View>
    );
  }
}