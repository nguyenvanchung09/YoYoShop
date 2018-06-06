import React, { Component } from 'react';
import {Text,View} from 'react-native';
import HeaderBar from './header';
import Banner from './bannerSlide';
import HotProduct from './hotProduct';
import NewProduct from './newProduct';

export default class App extends Component {
  render() {
    return (
        <View style={{flex:1}}>
            <HeaderBar title="Home"/>
            <Banner/>
            <HotProduct/>
            <NewProduct/>
        </View>
    );
  }
}