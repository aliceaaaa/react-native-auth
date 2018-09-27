import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class Loginform extends Component {
state = {
    text: ''
}

   render() {
        return (
           <Card>
               <CardSection>
                   <TextInput
                   value={this.state.text} 
                   onCHangeText={text => this.setState({ text: text})}
                   style={{ height:20, width: 100}} 
                   />
               </CardSection>
               <CardSection/>
               <CardSection>
                     <Button> Log In </Button>
               </CardSection>
           </Card>
        );
    }
}