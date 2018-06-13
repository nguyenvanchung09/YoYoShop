import React from 'react';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './user/login';
import Register from './user/register';
import Home from './main/home';
import PrDetail from './main/productDetail';
import Contact from './main/contact';
import Cart from './main/cart';

export const HomeStack = createStackNavigator(
    {
        Home:Home,
        PrDetail:PrDetail,
        Cart:Cart,
        
        
        Contact:Contact,
        
    },
    {
        headerMode: 'none'
    }
)
export const UserStack = createStackNavigator(
    {
        Login:Login,
        Register:Register,
        Home:Home
    },
    {
        headerMode: 'none'
    }
)

export const RootStack = createBottomTabNavigator(
    {
        User: {
            screen: UserStack,
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
            screen: HomeStack,
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