import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';
import background from '../../media/images/bg-login.jpg';
import logo from '../../media/images/logo-app.png';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pasword:''
        }
    }
  render() {
    return (
        <ImageBackground source={background} style={{
                width:'100%',
                height:'100%',
                alignItems:'center'
            }}>
            <Image
                source={logo}
                style={style.logo}
            />
            <TextInput
                style={style.inputUser}
                underlineColorAndroid='transparent'
                onChangeText={(user) => this.setState({user})}
                value={this.state.user}
                placeholder='Tên đăng nhập...'
                placeholderTextColor='gray'
            />
            <TextInput
                style={style.inputPassword}
                underlineColorAndroid='transparent'
                onChangeText={(pasword) => this.setState({pasword})}
                value={this.state.pasword}
                placeholder='Mật khẩu...'
                placeholderTextColor='gray'
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={style.login}
            >
                <Text style={{
                    color:'blue',
                    textAlign:'center',
                    }}>
                    ĐĂNG NHẬP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.login}
            >
                <Text style={{
                    color:'blue',
                    textAlign:'center',
                    }}>
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
    inputUser:{
        height: 40,
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius:4,
        width:'60%',
        padding:10,
        color:'#fff',
        marginBottom:10
    },
    inputPassword:{
        height: 40,
        borderColor: 'yellow',
        borderWidth: 1,
        borderRadius:4,
        width:'60%',
        padding:10,
        color:'#fff'
    },
    logo:{
        height:150,
        resizeMode: 'center',
        marginTop:'25%'
    },
    login:{
        width:'60%',
        borderRadius:50,
        backgroundColor:'#fff',
        height:40,
        justifyContent:'center',
        marginTop:10
    }
})