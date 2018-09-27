import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default class Loginform extends Component {
state = {
    email: '',
    password: '',
    error: '',
    loading: false
}

    onButtonPress = () => {
        console.log("press")
        const { email, password } = this.state;

        this.setState({error: '', loading: true})

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail)
            });
    }

    onLoginSuccess = () => {
        console.log('success worked')
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail = () => {
        consol.log('fail worked')
        this.setState({
            loading: false,
            error: 'Authentication failed'
        })
    }

    renderButton() {
    return (
      this.state.loading
        ?  <Spinner size='small'/>
        :  <Button onPress={this.onButtonPress}> 
            Log In 
           </Button>
        )
    }

   render() {
        return (
           <Card>
               <CardSection>
                   <Input
                   placeholder = "user@gmail.com"
                   label="Email"
                   value={this.state.email} 
                   onChangeText={email => this.setState({ email })}
                   />
               </CardSection>
               <CardSection> 
                    <Input
                    secureTextEntry={ true }
                    placeholder = "password"
                    label = "Password"
                    value = {this.state.password}
                    onChangeText={password => this.setState({ password })}
                    />
               </CardSection>

               <Text style={styles.errorTextStyle}>
               {this.state.error}
               </Text>

               <CardSection>
                     {this.renderButton()}
               </CardSection>
           </Card>
        );
    }
}