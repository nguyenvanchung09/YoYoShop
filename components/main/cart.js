import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableNativeFeedback,
    AsyncStorage,
    Alert,
    ScrollView}from 'react-native';
import { Button, Icon} from 'native-base';
import styled from 'styled-components';
import {Header} from 'react-native-elements';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
          cart:[
              
          ]
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("CART", (err, res) => {
            if (!res) this.setState({cart: []});
            else this.setState({cart: JSON.parse(res)});
        });
      }

      removeItemPressed = (item) => {
        Alert.alert(
            'Xóa giỏ hàng',
          'Bạn muốn xóa sản phẩm này khỏi giỏ hàng ?',
          [
            {text: 'Không', onPress: () => console.log('No Pressed'), style: 'Đóng'},
            {text: 'Có', onPress: () => this.removeCart(item)},
          ]
        )
      }

      removeCart = (itemToRemove) => {
        let items = [];

        this.state.cart.map((item) => {
            if(JSON.stringify(item) !== JSON.stringify(itemToRemove) )
                items.push(item);
            });
        AsyncStorage.setItem("CART",JSON.stringify(items))
        this.setState({cart: items});
        AsyncStorage.removeItem("CART");
      }

    _renderItems = () => {
        let items = [];

        this.state.cart.map((item) =>{
            items.push(
                <View
                    style={{
                        flexDirection:'row',
                        paddingLeft:20,
                        paddingRight:20,
                        marginBottom:20
                    }}
                >
                    <Image
                        source={item.thumb}
                        style={{
                            width:100,
                            height:100,
                            flex:1
                        }}
                    />
                    <View
                        style={{
                            marginLeft:10,
                            flex:2,
                            marginTop:10
                        }}
                    >
                        <Name>{item.namePr}</Name>
                        <Price>{item.price}</Price>
                        <Type>{item.type}</Type>
                        <Num>Số lượng : {item.num}</Num>
                    </View>
                    <TouchableNativeFeedback
                        style={{
                            flex:1
                        }}
                        onPress={() => this.removeItemPressed(item)}
                    >
                        <View style={{
                                marginTop:30
                            }}>
                            <Icon
                                size={30}
                                style={{
                                    fontSize: 30,
                                    color: '#95a5a6'
                                }}
                                name='trash' />
                        </View>
                    </TouchableNativeFeedback>
                </View>
            )
        });
        return items;
    };

    render() {
        return (
            <View style={{flex:1}}>
                <Header
                    leftComponent={{onPress:() =>{this.props.navigation.goBack()},icon: 'close', color: '#fff' }}
                    centerComponent={{text: 'Giỏ hàng', style: { color: '#fff' }}}
                    rightComponent={{ }}
                />
               <ScrollView style={{marginTop:20}}>
                   {
                       this.state.cart.length <= 0 ?
                       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Icon name="ios-cart" size={38} style={{fontSize: 38, color: '#95a5a6', marginBottom: 7}} />
                        <Text style={{color: '#95a5a6'}}>Giỏ hàng trống</Text>
                        </View>
                        :
                        <View style={{paddingRight: 10}}>
                        <View>
                            {this._renderItems()}
                        </View>
                        <Button
                            style={{
                                paddingLeft:10,
                                paddingRight:10,
                                width:'80%',
                                justifyContent:'center',
                                alignSelf:'center',
                                marginTop:40,
                                marginBottom:20
                            }}
                        >
                                <Text
                                    style={{
                                        color:'#fff'
                                    }}
                                >
                                    Thanh toán
                                </Text>
                            </Button>
                        </View>
                   }
               </ScrollView>
            </View>
        )
    }
}


const Name = styled.Text`
    font-size:16px;
    color:black;
    margin-bottom:5px;
`;
const Price = styled.Text`
    color:red;
    margin-bottom:5px;
`;
const Type = styled.Text`

`;
const Num = styled.Text`

`;
