import React, { Component } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import banner1 from '../../media/images/banner1.jpg';
import banner2 from '../../media/images/banner2.jpg';
import banner3 from '../../media/images/banner3.jpg';

export default class Banner extends Component {
  render() {
    return (
        <Swiper style={styles.wrapper} height={250} autoplay showsButtons={true}>
            <View style={styles.slide1}>
                <Image source={banner1}/>
            </View>
            <View style={styles.slide2}>
                <Image source={banner2}/>
            </View>
            <View style={styles.slide3}>
                <Image source={banner3}/>
            </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flexDirection:'row'
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
});