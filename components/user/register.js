import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert
} from 'react-native';
const background = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fbg-login.jpg?alt=media&token=b96ed50b-a644-48ee-8483-60c38dc5cc8e';
const logo = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Flogo-app.png?alt=media&token=454b3e80-7168-40d7-800e-48717e42513f';
import {firebaseApp} from '../databaseConfig';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    Dangky = () => {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            Alert.alert(
                'Alert Title',
                'Dang ky thanh cong : ' + this.state.email,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
                ],
                { cancelable: false }
              )
              this.setState({
                  email : '',
                  password : ''
              })
        })
        .catch(function(error) {
            Alert.alert(
                'Alert Title',
                'Dang ky that bai !',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        });
    }

  render() {
    return (
        <ImageBackground source={{uri:background}} style={{
                width:'100%',
                height:'100%',
                alignItems:'center'
            }}>
            <Image
                source={{uri:logo}}
                style={style.logo}
            />
            <TextInput
                style={style.inputUser}
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
                placeholder='Email...'
                placeholderTextColor='gray'
            />
            <TextInput
                style={style.inputPassword}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                placeholder='Mật khẩu...'
                placeholderTextColor='gray'
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={style.login}
                onPress={this.Dangky}
            >
                <Text style={{
                    color:'blue',
                    textAlign:'center',
                    }}>
                    ĐĂNG KÝ
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.login}
                onPress={() => this.props.navigation.goBack()}
            >
                <Text style={{
                    color:'blue',
                    textAlign:'center',
                    }}>
                    QUAY LẠI
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
        marginTop:'15%'
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