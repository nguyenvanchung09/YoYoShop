import React, { Component } from 'react';
import {Text,View,ScrollView} from 'react-native';
import HeaderBar from './header';
import {Header} from 'react-native-elements';
import Banner from './bannerSlide';
import HotProduct from './hotProduct';
import NewProduct from './newProduct';

export default class Home extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header
            leftComponent={{icon: 'menu', color: '#fff' }}
            centerComponent={{text: 'Trang chủ', style: { color: '#fff' }}}
            rightComponent={{ icon: 'shopping-cart', color: '#fff', onPress: () => this.props.navigation.navigate('Cart') }}
        />
        <ScrollView style={{flex:1}}>
            <Banner/>
            <HotProduct/>
            <NewProduct/>
        </ScrollView>
      </View>
    );
  }
}