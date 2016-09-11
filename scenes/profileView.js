import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

var styles = require("../components/styles");
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
        <TouchableHighlight
          style={styles.createChallengeButton}
          underlayColor='#949494'
          onPress={this._onCreateChallenge}>
          <Text>New Challenge</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _onViewChallenges: function() {
    this.props.navigator.push({
      name: 'Challenges',
      passProps: {
        message: "Peruse your challenge list"
      }
    });
  },

  _onCreateChallenge: function() {
    this.props.navigator.push({
      name: 'New Challenge',
      passProps: {
        message: "Make a challenge my friend"
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

module.exports = ProfileView;
