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

const newProduct1 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product1.jpg?alt=media&token=c1f11a67-9e08-470a-a826-4d7598286d9d';
const newProduct2 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product2.jpg?alt=media&token=09164eba-a8da-47c2-8437-83ce0f04a4de';
const newProduct3 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product3.jpg?alt=media&token=8ef60e62-0393-4897-8ded-6ad91103f583';
const newProduct4 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product4.jpg?alt=media&token=f06f2049-955d-42c0-9ee7-ffbbcccbad46';

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
                  <Image style={styles.imgPr} source={{uri:newProduct1}}/>
                  <Price>300.000 đ</Price>
                  <NamePr>Sản phẩm 1</NamePr>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
              <View style={styles.product}>
                <Image style={styles.imgPr} source={{uri:newProduct1}}/>
                <Price>300.000 đ</Price>
                <NamePr>Sản phẩm 1</NamePr>
              </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
              <View style={styles.product}>
                <Image style={styles.imgPr} source={{uri:newProduct1}}/>
                <Price>300.000 đ</Price>
                <NamePr>Sản phẩm 1</NamePr>
              </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
            onPress={() => this.props.navigation.navigate('PrDetail')}
            >
              <View style={styles.product}>
                <Image style={styles.imgPr} source={{uri:newProduct1}}/>
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