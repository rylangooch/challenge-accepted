import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import Auth0Lock from 'react-native-lock';

var credentials = require('./environment');
var lock = new Auth0Lock(credentials);

var WelcomeView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Challenge Accepted</Text>
          <Text style={styles.subtitle}>Bet friends, not computers</Text>
        </View>
        <TouchableHighlight
          style={styles.signInButton}
          underlayColor='#949494'
          onPress={this._onLogin}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _onLogin: function() {
    lock.show({
        closable: true,
      },
      (err, profile, token) => {
        if (err) {
        console.log(err);
        return;
      }
      this.props.navigator.push({
        name: 'Profile',
        passProps: {
          profile: profile,
          token: token,
        }
      });
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#15204C',
  },
  image: {
    flex: 3,
    alignSelf: 'center',
    width: 300,
    height: 180,
    marginTop: 100
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 169,
    width: 151,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
    padding: 60,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = WelcomeView;
