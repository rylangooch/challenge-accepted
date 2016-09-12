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
  // getInitialState: function() {
  //   return {
  //     challengeDetails: this.props.challengeJson
  //   }
  // },

  render: function() {
    console.log(this.props.challengeJson);
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Challenges</Text>
          <Text style={styles.subtitle}>{this.props.challengeJson.data[0].attributes.title}</Text>
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
    for(var i = 0; i < this.props.challengeJson.data.length(); i++) {

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
