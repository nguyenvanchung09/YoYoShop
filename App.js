import React, { Component } from 'react';
import {Text,View} from 'react-native';
import {UserStack,RootStack,HomeStack} from './components/root';
import * as firebase from 'firebase';
import {firebaseApp} from './components/databaseConfig';

export default class App extends Component {

  render() {
   
      return (<HomeStack/>)

   
    
    
  }
}