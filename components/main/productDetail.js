import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Picker,
    TouchableNativeFeedback,
    AsyncStorage}from 'react-native';
import { Button, Icon} from 'native-base';
import Swiper from 'react-native-swiper';
import styled from 'styled-components';
import { Rating } from 'react-native-elements';
import HeaderBar from './header';
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';

import prDetail1 from '../../media/images/product-detail1.jpg';
import prDetail2 from '../../media/images/product-detail2.jpg';
import prDetail3 from '../../media/images/product-detail3.jpg';
import prDetail4 from '../../media/images/product-detail4.jpg';
import prDetail5 from '../../media/images/product-detail5.jpg';
const newProduct1 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product1.jpg?alt=media&token=c1f11a67-9e08-470a-a826-4d7598286d9d';
const newProduct2 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product2.jpg?alt=media&token=09164eba-a8da-47c2-8437-83ce0f04a4de';
const newProduct3 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product3.jpg?alt=media&token=8ef60e62-0393-4897-8ded-6ad91103f583';
const newProduct4 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product4.jpg?alt=media&token=f06f2049-955d-42c0-9ee7-ffbbcccbad46';
const newProduct5 = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fnew-product5.jpg?alt=media&token=6d3d0635-759e-4795-8b6e-9d85055bb073';

class PrDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
          errors: [],
          color:'',
          
        };
        this.props = props;
        this._carousel = {};
        this.init();
      }

      increase = () =>{
          this.setState({
            num:this.state.num > 1 ? this.state.num - 1 : 1
          })
      }
      reduction = () =>{
        this.setState({
            num:this.state.num + 1
          })
      }

      addToCart = () =>{
          var product = this.state.product;
          product['name'] = this.state.product.namePr;
          product['price'] = this.state.product.price;
        AsyncStorage.setItem('CART',JSON.stringify([product]))
      }
    
      init(){
        this.state = {
        num:1,
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
          ],
          product:{
            namePr:'Mũ len',
            price:'300.000 đ'
          }
          
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
                <CurrentVideoImage source={{uri:item.thumbnail}} />
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
                    <NamePr>{this.state.product.namePr}</NamePr>
                    <Price>{this.state.product.price}</Price>
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
                    <View
                        style={{
                            flexDirection:'row'
                        }}
                    >
                        <Text
                            style={{
                                marginTop:15,
                                fontSize:15,
                                width:'20%'
                            }}
                        >Màu</Text>
                        <Picker
                            selectedValue={this.state.color}
                            style={{
                                height: 50,
                                width: '70%'
                            }}
                            onValueChange={(itemValue, itemIndex) => this.setState({color: itemValue})}>
                            <Picker.Item label="Vàng" value="Vàng" />
                            <Picker.Item label="Đỏ" value="Đỏ" />
                            <Picker.Item label="Xanh" value="Xanh" />
                        </Picker>
                    </View>
                    <View
                        style={{
                            flexDirection:'row'
                        }}
                    >
                        <Text
                            style={{
                                marginTop:15,
                                fontSize:15,
                                width:'20%'
                            }}
                        >Size</Text>
                        <Picker
                            selectedValue={this.state.color}
                            style={{
                                height: 50,
                                width: 200,
                                width:'70%'
                            }}
                            onValueChange={(itemValue, itemIndex) => this.setState({color: itemValue})}>
                            <Picker.Item label="S" value="S" />
                            <Picker.Item label="L" value="L" />
                            <Picker.Item label="XL" value="XL" />
                        </Picker>
                    </View>
                    <View
                        style={{
                            flexDirection:'row'
                        }}
                    >
                        <Text
                            style={{
                                marginTop:15,
                                fontSize:15,
                                width:'20%'
                            }}
                        >Số lượng</Text>
                        <View
                            style={{
                                height: 50,
                                width: 200,
                                width:'70%',
                                flexDirection:'row'
                        }}>
                            <Button light
                                onPress={this.increase}
                            >
                                <Icon name='ios-remove-outline' />
                            </Button>
                            <View style={{
                                flex: 4,
                                justifyContent: 'center',
                                alignItems: 'center',
                                paddingLeft: 30,
                                paddingRight: 30}}
                            >
                                <Text>{this.state.num}</Text>
                            </View>
                            <Button light
                                onPress={this.reduction}
                            >
                                <Icon name='ios-add' />
                            </Button>
                        </View>
                    </View>
                    <Button
                        style={{
                            backgroundColor:'blue',
                            marginTop:10,
                            width:'60%',
                            alignSelf:'center',
                            justifyContent:'center'
                        }}
                        onPress={this.addToCart}
                    >
                        <Text
                            style={{
                                color:'#fff',
                                paddingLeft:10,
                                paddingRight:10
                            }}
                        >Thêm vào giỏ hàng</Text>
                    </Button>
                    <Button
                        style={{
                            backgroundColor:'blue',
                            marginTop:10,
                            width:'60%',
                            alignSelf:'center',
                            justifyContent:'center'
                        }}
                        onPress={() => this.props.navigation.navigate('Cart')}
                    >
                        <Text
                            style={{
                                color:'#fff',
                                paddingLeft:10,
                                paddingRight:10
                            }}
                        >Cart</Text>
                    </Button>
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

export default withNavigation(PrDetail);

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
    margin-top:20px
`;