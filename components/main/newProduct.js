import React, { Component } from 'react';
import {Text,View} from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

import newProduct1 from '../../media/images/new-product1.jpg';
import newProduct2 from '../../media/images/new-product2.jpg';
import newProduct3 from '../../media/images/new-product3.jpg';
import newProduct4 from '../../media/images/new-product4.jpg';
import newProduct5 from '../../media/images/new-product5.jpg';

export default class NewProduct extends Component {
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
              thumbnail: newProduct1
            },
            {
              id: "sNPnbI1arSE",
              thumbnail: newProduct2
            },
            {
              id: "VdsaSawe",
              thumbnail: newProduct3
            },
            {
              id: "RvasdCa",
              thumbnail: newProduct4
            },
            {
              id: "Aevfsdfs",
              thumbnail: newProduct5
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
              <Title>Sản phẩm bán chạy</Title>
            <Carousel
              ref={ (c) => { this._carousel = c; } }
              data={this.state.images}
              renderItem={this._renderItem.bind(this)}
              onSnapToItem={this.handleSnapToItem.bind(this)}
              sliderWidth={360}
              itemWidth={256}
              layout={'default'}
              layoutCardOffset={'18'}
              loop={true}
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
      width: 200;
      height: 120;
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
      height: 180;
      width: 100%;
    `