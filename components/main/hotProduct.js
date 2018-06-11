import React, { Component } from 'react';
import {Text,View} from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';

import hotProduct1 from '../../media/images/hot-product1.jpg';
import hotProduct2 from '../../media/images/hot-product2.jpg';
import hotProduct3 from '../../media/images/hot-product3.jpg';
import hotProduct4 from '../../media/images/hot-product4.jpg';
import hotProduct5 from '../../media/images/hot-product5.jpg';

class HotProduct extends Component {
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
                <CurrentVideoImage source={item.thumbnail} />
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
    export default withNavigation(HotProduct);

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