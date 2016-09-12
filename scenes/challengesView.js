import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Alert,
  ScrollView
} from 'react-native';

var styles = require("../components/styles");

var ChallengesView = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      challenges: ds.cloneWithRows(this._showChallenges())
    }
  },

  render: function() {
    console.log(this.props.challengeJson);
    console.log(this.state.challenges);
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Challenges
        </Text>
        <View style={styles.messageBox}>
          <ListView
          dataSource={this.state.challenges}
          renderRow={(rowData) => <Text style={styles.subtitle}>{rowData}</Text>}
          />
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
    var challengeTitles = [];

    for(var i = 0; i < this.props.challengeJson.data.length; i++) {
      challengeTitles.push(this.props.challengeJson.data[i].attributes.title.toString());
    }

    return challengeTitles;
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
