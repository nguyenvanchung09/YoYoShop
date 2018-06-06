import React from 'react';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './user/login';
import Register from './user/register';
import Home from './main/home';

export const HomeStack = createStackNavigator(
    {
        Home:Home
    },
    {
        headerMode: 'none'
    }
)
export const UserStack = createStackNavigator(
    {
        Login:Login,
        Register:Register,
    },
    {
        headerMode: 'none'
    }
)

export const RootStack = createBottomTabNavigator(
    {
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
        }
    },
    {
        initialRouteName: 'Home',
        activeTintColor: '#F44336'
    }
);