'use strict';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

var API_ENDPOINT = 'http://localhost:3000/challenges';

var ProfileView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.profile.picture}}
          />
          <Text style={styles.title}>Welcome {this.props.profile.name}</Text>
        </View>
        <TouchableHighlight
          style={styles.callApiButton}
          underlayColor='#949494'
          onPress={this._onViewChallenges}>
          <Text>View Challenges</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _onViewChallenges: function() {
    this.props.navigator.push({
      name: 'Challenges',
      passProps: {
        // profile: profile,
        // token: token,
        message: "Peruse your challenge list"
      }
    });
  },

  _onCallApi: function() {
    console.log(this.props.token.idToken);
    fetch(API_ENDPOINT, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + this.props.token.idToken
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.navigator.push({
        name: 'Challenges',
        passProps: {
          challenges: responseJson
        }
      });
    })
    .catch((error) => {
      Alert.alert(
        'List Retrieval Failed',
        'Oops',
        [
          {text: 'OK'},
        ]
      )
    });
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#15204C',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 110,
    width: 102,
    marginBottom: 80,
  },
  avatar: {
    alignSelf: 'center',
    height: 128,
    width: 240,
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  callApiButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = ProfileView;
