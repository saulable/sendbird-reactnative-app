import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation'

import {Provider} from 'react-redux';
import store from './store';

import Login from './screens/Login'
import Menu from './screens/Menu'
import Profile from './screens/Profile'
import OpenChannel from './screens/OpenChannel'

const MainNavigator = StackNavigator({
    Login: {screen: Login},
    Menu: {screen: Menu},
    Profile: { screen: Profile },
    OpenChannel: { screen: OpenChannel }
});

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
            <MainNavigator />
            </Provider>
        )
    }
}
