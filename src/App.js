import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header, Button, Spinner, CardSection } from "./components/common";
import LoginForm from "./components/Loginform";

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDCCR56-RKFvEiKn1mPSVk2u3WSaTgjNeM",
      authDomain: "auth-e21ca.firebaseapp.com",
      databaseURL: "https://auth-e21ca.firebaseio.com",
      projectId: "auth-e21ca",
      storageBucket: "auth-e21ca.appspot.com",
      messagingSenderId: "520552945146"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
