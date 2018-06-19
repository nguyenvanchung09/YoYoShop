import React from 'react';
import { createStackNavigator,createBottomTabNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,Text,Image} from 'react-native';
import Login from './user/login';
import Register from './user/register';
import Home from './main/home';
import PrDetail from './main/productDetail';
import Contact from './main/contact';
import Cart from './main/cart';

import bgDrawer from '../media/images/logo-app.png';

const DrawerContent = (props) => (
    <View>
      <View
        style={{
          backgroundColor: 'yellow',
          height: 140,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
            style={{
                resizeMode:'center'
            }}
            source={bgDrawer}
        />
      </View>
      <DrawerItems {...props} />
    </View>
  )

const Drawer = createDrawerNavigator(
    {
        Contact:{
            screen:Contact,
            navigationOptions:{
                drawerLabel: 'Liên hệ',
                drawerIcon:<Ionicons name='ios-map' size={20} color='#0dc45c'/>
            }
        },
        Home:{
            screen:Home,
            navigationOptions:{
                drawerLabel: 'Trang chủ',
                drawerIcon:<Ionicons name='md-home' size={20} color='#0dc45c'/>
            }
        },
        
        User:{
            screen:Login,
            navigationOptions:{
                drawerLabel: 'Đăng nhập',
                drawerIcon:<Ionicons name='ios-person' size={20} color='#0dc45c'/>
            }
        }
    },
    {
        drawerBackgroundColor: 'blue',
        contentOptions:{
            inactiveTintColor: "#fff",
            activeTintColor: "#0dc45c",
            labelStyle :{
                marginLeft:0
            }
        },
        contentComponent: DrawerContent,
    }
)

const User = createStackNavigator(
    {
        Login:Login,
    }
)

export const HomeStack = createStackNavigator(
    {
        Drawer:{
            screen:Drawer,
        },
        PrDetail:PrDetail,
        Cart:Cart,
        Register:Register
    },
    {
        headerMode: 'none'
    }
)

export const RootStack = createBottomTabNavigator(
    {
        User: {
            screen: User,
            navigationOptions: {
                tabBarLabel: 'Tài khoản',
                tabBarIcon: ({ tintColor, focused }) => (
                  <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{ color: tintColor }}
                  />
                )
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Trang chủ',
                tabBarIcon: ({ tintColor, focused }) => (
                  <Ionicons
                    name={focused ? 'ios-home' : 'ios-home-outline'}
                    size={26}
                    style={{ color: tintColor }}
                  />
                )
            }
        },
    }
);