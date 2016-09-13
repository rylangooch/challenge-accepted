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

var ProfileView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.profile.picture}}
          />
        <Text style={styles.welcomeTitle}>Welcome {this.props.profile.email}</Text>
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
    fetch('http://localhost:3000/challenges', {
      method: "GET",
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.navigator.push({
        name: 'Challenges',
        passProps: {
          challengeJson: responseJson
        }
      });
    })
    .catch((error) => {
      Alert.alert(
        "List Retrieval Failed",
        [
          {text: 'OK'},
        ]
      )
    })
  },

  _onCreateChallenge: function() {
    this.props.navigator.push({
      name: 'New Challenge',
      passProps: {
        message: "Make a challenge my friend"
      }
    });
  },
});

module.exports = ProfileView;
