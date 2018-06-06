import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
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
        Register:Register
    },
    {
        headerMode: 'none'
    }
)

export const Tabbar = createBottomTabNavigator(
    {
        Home : {
            screen : HomeStack
        },
        User : {
            screen : UserStack
        }
    },
    {
        tabBarOptions : {
            style :{
                backgroundColor : '#ddd'
            },
            inactiveTintColor:'green',
            activeTintColor :'red'
        }
    }
)
