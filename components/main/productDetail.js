import React, { Component } from 'react';
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import { Rating } from 'react-native-elements';
import HeaderBar from './header';
import Carousel from 'react-native-snap-carousel';

import prDetail1 from '../../media/images/product-detail1.jpg';
import prDetail2 from '../../media/images/product-detail2.jpg';
import prDetail3 from '../../media/images/product-detail3.jpg';
import prDetail4 from '../../media/images/product-detail4.jpg';
import prDetail5 from '../../media/images/product-detail5.jpg';
import newProduct1 from '../../media/images/new-product1.jpg';
import newProduct2 from '../../media/images/new-product2.jpg';
import newProduct3 from '../../media/images/new-product3.jpg';
import newProduct4 from '../../media/images/new-product4.jpg';
import newProduct5 from '../../media/images/new-product5.jpg';

export default class PrDetail extends Component {
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
  render() {
    return (
        <View style={{flex:1,backgroundColor:'#fff'}}>
            <HeaderBar title="Chi tiết sản phẩm"/>
            <ScrollView style={{flex:1}}>
                <Swiper style={styles.wrapper} height={200}>
                    <View style={styles.slide1}>
                        <Image source={prDetail1}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={prDetail2}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={prDetail3}/>
                    </View>
                    <View style={styles.slide4}>
                        <Image source={prDetail4}/>
                    </View>
                    <View style={styles.slide5}>
                        <Image source={prDetail5}/>
                    </View>
                </Swiper>
                <Wrapper>
                    <NamePr>Mũ len</NamePr>
                    <Price>300.000 đ</Price>
                    <Rating
                        type="star"
                        fractions={1}
                        startingValue={3}
                        readonly={false}
                        imageSize={20}
                        onFinishRating={this.ratingCompleted}
                        style={{
                            paddingVertical: 10
                        }}
                    />
                    <Info>
                        Mẹ bỉm sữa nhận đan giày len, bikini len mẹ và bé theo yêu cầu với giá rẻ!
                        Không cần đặt cọc, chỉ cần cho e kích cỡ chân hay số đo tương ứng của bé là được thôi ah! vì ko cần nên mom đặt rồi vui lòng nhận hàng giùm e, boom hàng tội e lắm ah!
                        Chất liệu len thì các mom hoàn toàn yên tâm vì e chỉ sử dụng len cotton milk mềm, mịn, êm ái, ko lo kích ứng da bé đâu mom nhé!
                        Mom nào quan tâm cứ ib e để xem nhiều mẫu hơn và e tư vấn nhiệt tình hơn nhé
                    </Info>
                    <CarouselBackgroundView>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('PrDetail')}>
                            <Text style={{fontSize:18,color:'#000',fontWeight:'bold'}}>
                                Sản phẩm cùng loại
                            </Text>
                        </TouchableOpacity>
                        <Carousel
                        ref={ (c) => { this._carousel = c; } }
                        data={this.state.images}
                        renderItem={this._renderItem.bind(this)}
                        sliderWidth={360}
                        itemWidth={256}
                        layout={'default'}
                        layoutCardOffset={'18'}
                        loop={true}
                        firstItem={1}
                        />
                    </CarouselBackgroundView>
                </Wrapper>
            </ScrollView>
            
        </View>
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

const Title = styled.Text`
fontSize:18;
marginLeft:10;
`;

const CurrentVideoImage = styled.Image`
top: 25;
box-shadow: 5px 10px;
width: 250;
height: 160;
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
margin-top:20px
`

const Wrapper = styled.View`
    padding:10px
`;

const NamePr = styled.Text`
    font-size:18px
`;

const Price = styled.Text`
    color:red;
    font-size:18px;
    font-weight:bold
`;

const Info = styled.Text`
    
`;