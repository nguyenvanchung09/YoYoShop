import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableNativeFeedback,AsyncStorage}from 'react-native';
import { Button, Icon} from 'native-base';
import styled from 'styled-components';
import {Header} from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
          cart:[
              
          ]
        };
    }

    componentWillMount() {
        AsyncStorage.getItem("CART", (err, res) => {
          this.setState({cart: JSON.parse(res)});
        });
      }

      removeCart = (itemToRemove) => {
        let items = [];

        AsyncStorage.setItem("CART",JSON.stringify(items))
        this.setState({cart: items});
        AsyncStorage.removeItem("CART");
      }

    _renderItem = ({item}) => (
        <View>
            <View
                style={{
                    flexDirection:'row',
                    paddingLeft:20,
                    paddingRight:20
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
                </View>
                <TouchableNativeFeedback
                    style={{
                        flex:1
                    }}
                    onPress={this.removeCart}
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
            <Button
                style={{
                    paddingLeft:10,
                    paddingRight:10,
                    width:'80%',
                    justifyContent:'center',
                    alignSelf:'center',
                    marginTop:40
                }}
            >
                <Text
                    style={{
                        color:'#fff'
                    }}
                >Thanh toán</Text>
            </Button>
        </View>
      );

    render() {
        return (
            <View>
                <Header
                    leftComponent={{onPress:() =>{this.props.navigation.goBack()},icon: 'close', color: '#fff' }}
                    centerComponent={{text: 'Cart', style: { color: '#fff' }}}
                    rightComponent={{ }}
                />
                <FlatList
                    style={{
                        marginTop:10
                    }}
                    data={this.state.cart}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
}

export default withNavigation(Cart);

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
