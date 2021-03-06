import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Alert,
    AsyncStorage
} from 'react-native';
const background = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Fbg-login.jpg?alt=media&token=b96ed50b-a644-48ee-8483-60c38dc5cc8e';
const logo = 'https://firebasestorage.googleapis.com/v0/b/yoyoshop-b03c3.appspot.com/o/images%2Flogo-app.png?alt=media&token=454b3e80-7168-40d7-800e-48717e42513f';
import {firebaseApp} from '../databaseConfig';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    Dangnhap = () => {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((userData) => {
            Alert.alert(
                'Alert Title',
                'Dang nhap thanh cong',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('Home')},
                ],
                { cancelable: false }
            )
            // try {
            //     await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
            //   } catch (e) {
            //     console.log(e)
            // }
            // this.setState({
            //     loading: false
            // })
            // AsyncStorage.setItem('userData', JSON.stringify(userData));
            // console.log(userData);
            // this.props.navigation.navigate('Home')
            
        })
        .catch(function(error) {
            Alert.alert(
                'Alert Title',
                'Dang nhap that bai !',
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
            >
                <Text style={{
                    color:'blue',
                    textAlign:'center',
                    }}
                    onPress={this.Dangnhap}
                >
                    ĐĂNG NHẬP
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.login}
                onPress={() => this.props.navigation.navigate('Register')}
            >
                <Text style={{
                    color:'blue',
                    textAlign:'center',
                    }}>
                    ĐĂNG KÝ
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