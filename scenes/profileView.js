import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

var credentials = require("../environment");
var styles = require("../components/styles");
var combinedChallenges = {};

var ProfileView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.profile.picture}}
          />
        <Text style={styles.welcomeTitle}>Welcome {this.props.profile.nickname}!</Text>
        </View>
        <TouchableHighlight
          style={styles.mainButton}
          underlayColor='#949494'
          onPress={this._onViewChallenges}>
          <Text style={styles.mainButtonText}>View Challenges</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.mainButton}
          underlayColor='#949494'
          onPress={this._onCreateChallenge}>
          <Text style={styles.mainButtonText}>New Challenge</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _onViewChallenges: async function() {
    var firstResponse = {};
    try {
      let ownerResponse = await fetch('http://localhost:3000/challenges?filter[owner]='+this.props.profile.userId, {
        method: "GET",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
      });
      let ownerResponseJson = await ownerResponse.json();
      firstResponse = ownerResponseJson;
      let challengerResponse = await fetch('http://localhost:3000/challenges?filter[challenger]='+this.props.profile.userId, {
        method: "GET",
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        }
      });
      let challengerResponseJson = await challengerResponse.json();
      let combinedChallenges = firstResponse.data.concat(challengerResponseJson.data);
      this._goToChallenges(combinedChallenges);
    } catch(error) {
      Alert.alert(
        "List Retrieval Failed",
        [
          {text: 'OK'},
        ]
      )
    };
  },

  _goToChallenges: function (combinedChallenges) {
    this.props.navigator.push({
      name: 'Challenges',
      passProps: {
        profile: this.props.profile,
        challengesArray: combinedChallenges
      }
    });
  },

  _onCreateChallenge: function() {
    fetch(credentials.url + "/api/v2/users", {
      method: "GET",
      headers: {
        "Authorization": credentials.token,
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.props.navigator.push({
        name: 'New Challenge',
        passProps: {
          userId: this.props.profile.userId,
          username: this.props.profile.nickname,
          userList: responseJson
        }
      });
    })
  }
});

module.exports = ProfileView;
