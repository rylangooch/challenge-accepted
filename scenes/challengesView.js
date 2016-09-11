import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView
} from 'react-native';

var styles = require("../components/styles");

var ChallengesView = React.createClass({
  getInitialState: function() {
    return {
      challengeDetails: this.props.challengeJson
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Challenges</Text>
          // <Text style={styles.subtitle}>{JSON.stringify(this.props.challengeJson)}</Text> //working?
          console.log({JSON.stringify(this.props.challengeJson)});
          // <Text style={styles.subtitle}>{this.props.challengeJson}</Text>
        </View>
        <TouchableHighlight
          style={styles.createChallengeButton}
          underlayColor='#949494'
          onPress={this._onCreateChallenge}>
          <Text>New Challenge</Text>
        </TouchableHighlight>
      </View>
    );
  },

  _showChallenges: function() {
    for(var i = 0; i < this.props.challengeJson.length(); i++) {

    }
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

module.exports = ChallengesView;
