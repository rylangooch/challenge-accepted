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

var API_ENDPOINT = 'http://localhost:3000/challenges';

var ChallengeListView = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>This is the challenges list</Text>
        <Text style={styles.messageBox}>{this.props.message}</Text>
      </View>
    );
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

module.exports = ChallengeListView;
