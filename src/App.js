import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import Loginform from './components/Loginform';


export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyDCCR56-RKFvEiKn1mPSVk2u3WSaTgjNeM",
                authDomain: "auth-e21ca.firebaseapp.com",
                databaseURL: "https://auth-e21ca.firebaseio.com",
                projectId: "auth-e21ca",
                storageBucket: "auth-e21ca.appspot.com",
                messagingSenderId: "520552945146"
            });
    }

    render() {
        return(
            <View>
                <Header title="Authentication"/>
                <Loginform />
            </View>
        )
    }
}