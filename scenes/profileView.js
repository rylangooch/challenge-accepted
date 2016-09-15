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
    console.log(combinedChallenges)
    this.props.navigator.push({
      name: 'Challenges',
      passProps: {
        userId: this.props.profile.userId,
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
          userList: responseJson
        }
      });
    })
  }
});

module.exports = ProfileView;
