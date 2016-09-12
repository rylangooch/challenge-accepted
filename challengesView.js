'use strict';
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


var ChallengesView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.subtitle}>{this.props.message}</Text>
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

  _onCreateChallenge: function() {
    this.props.navigator.push({
      name: 'New Challenge',
      passProps: {
        // profile: profile,
        // token: token,
        message: "Make a challenge my friend"
      }
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
  challengeList: {
    flex: 6,
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
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  createChallengeButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

module.exports = ChallengesView;
