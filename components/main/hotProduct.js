import React, { Component } from 'react';
import {Text,View} from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

const hotProduct1 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fhot-product1.jpg?alt=media&token=5e71556b-503f-451d-87ea-83cb096bc59e';
const hotProduct2 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fhot-product2.jpg?alt=media&token=ede3ff38-7ced-41d2-a3ea-706e722d937d';
const hotProduct3 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fhot-product3.jpg?alt=media&token=d1faa8f9-eebe-4cf1-a000-ea3a00212944';
const hotProduct4 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fhot-product4.jpg?alt=media&token=6ca54558-be6e-4658-9f2a-0c6cf2d1037c';
const hotProduct5 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fhot-product4.jpg?alt=media&token=6ca54558-be6e-4658-9f2a-0c6cf2d1037c';

export default class HotProduct extends Component {
    constructor(props){
        super();
        this.state = {
          errors: []
        }
        this.props = props;
        this._carousel = {};
        this.init();
      }
    
      init(){
        this.state = {
          images: [
            {
              id: "WpIAc9by5iU",
              thumbnail: hotProduct1
            },
            {
              id: "sNPnbI1arSE",
              thumbnail: hotProduct2
            },
            {
              id: "VdsaSawe",
              thumbnail: hotProduct3
            },
            {
              id: "RvasdCa",
              thumbnail: hotProduct4
            },
            {
              id: "Aevfsdfs",
              thumbnail: hotProduct5
            }
          ]
        };
      }
    
      _renderItem = ( {item, index} ) => {
        return (
            <ThumbnailBackgroundView>
              <CurrentVideoTO
                onPress={() => this.props.navigation.navigate('PrDetail')}
              >
                <CurrentVideoImage source={{uri:item.thumbnail}} />
              </CurrentVideoTO>
            </ThumbnailBackgroundView>
        );
      }
    
      render(){
        return (
          <CarouselBackgroundView>
              <Title>SẢN PHẨM HOT</Title>
            <Carousel
              ref={ (c) => { this._carousel = c; } }
              data={this.state.images}
              renderItem={this._renderItem.bind(this)}
              sliderWidth={360}
              itemWidth={256}
              layout={'stack'}
              loop={true}
              layoutCardOffset={'18'}
              firstItem={1}
            />
          </CarouselBackgroundView>
        )
      }
    }

    const Title = styled.Text`
        fontSize:18;
        marginLeft:10;
        font-weight:bold;
        color:black;
    `;
    
    const CurrentVideoImage = styled.Image`
      top: 25;
      box-shadow: 5px 10px;
      width: 256;
      height: 144;
      border-radius: 10;
    `;
    
    const ThumbnailBackgroundView = styled.View`
      justify-content: center;
      align-items: center;
      width: 256; 
    `;
    
    const CurrentVideoTO = styled.TouchableOpacity`
    `
    const CarouselBackgroundView = styled.View`
      height: 200;
      width: 100%;
      margin-top:10px;
    `