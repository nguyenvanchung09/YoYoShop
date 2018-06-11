import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

import newProduct1 from '../../media/images/new-product1.jpg';
import newProduct2 from '../../media/images/new-product2.jpg';
import newProduct3 from '../../media/images/new-product3.jpg';
import newProduct4 from '../../media/images/new-product4.jpg';

class NewProduct extends Component {
      render(){
        return (
          <View>
            <Title>SẢN PHẨM NỔI BẬT</Title>
            <View style={styles.productCotainer}>
            <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
                <View style={styles.product}>
                  <Image style={styles.imgPr} source={newProduct1}/>
                  <Price>300.000 đ</Price>
                  <NamePr>Sản phẩm 1</NamePr>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
              <View style={styles.product}>
                <Image style={styles.imgPr} source={newProduct1}/>
                <Price>300.000 đ</Price>
                <NamePr>Sản phẩm 1</NamePr>
              </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
              <View style={styles.product}>
                <Image style={styles.imgPr} source={newProduct1}/>
                <Price>300.000 đ</Price>
                <NamePr>Sản phẩm 1</NamePr>
              </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
              <View style={styles.product}>
                <Image style={styles.imgPr} source={newProduct1}/>
                <Price>300.000 đ</Price>
                <NamePr>Sản phẩm 1</NamePr>
              </View>
              </TouchableNativeFeedback>
            </View>
            </View>
        )
      }
    }
    export default withNavigation(NewProduct);
    
    const Title = styled.Text`
    fontSize:18;
    marginLeft:10;
    font-weight:bold;
        color:black;
`;
    const styles = StyleSheet.create({
      productCotainer:{
        flexDirection:'row',
        flexWrap:'wrap'
      },
      product:{
        width:'50%',
        padding:15
      },
      imgPr:{
        width:'100%',
        height:150,
        resizeMode:'cover'
      }
    });
    const Price = styled.Text`
      color:red
    `;
    const NamePr = styled.Text`
      color : #000
    `;