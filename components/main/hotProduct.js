import React, { Component } from 'react';
import {Text,View} from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

import hotProduct1 from '../../media/images/hot-product1.jpg';
import hotProduct2 from '../../media/images/hot-product2.jpg';
import hotProduct3 from '../../media/images/hot-product3.jpg';
import hotProduct4 from '../../media/images/hot-product4.jpg';
import hotProduct5 from '../../media/images/hot-product5.jpg';

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
    
      handleSnapToItem(index){
        console.log("snapped to ", index)
      }
    
      _renderItem = ( {item, index} ) => {
        return (
            <ThumbnailBackgroundView>
              <CurrentVideoTO
                 onPress={ () => { 
                    console.log("clicked to index", index)
                    this._carousel.snapToItem(index);
                  }}
              >
                <CurrentVideoImage source={item.thumbnail} />
              </CurrentVideoTO>
                {/*<NextVideoImage source={{ uri: this.state.currentVideo.nextVideoId }}/>*/}
            </ThumbnailBackgroundView>
        );
      }
    
      render(){
        return (
          <CarouselBackgroundView>
              <Title>Sản phẩm hot</Title>
            <Carousel
              ref={ (c) => { this._carousel = c; } }
              data={this.state.images}
              renderItem={this._renderItem.bind(this)}
              onSnapToItem={this.handleSnapToItem.bind(this)}
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
    `