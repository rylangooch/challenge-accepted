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
      challenges: ds.cloneWithRows(this.props.challengeJson.data)
    }
  },

  render: function() {
    console.log(this.props.challengeJson.data[0].attributes.title);
    console.log(this.state.challenges);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Challenges
        </Text>
        <View style={styles.messageBox}>
          <ListView
            dataSource={this.state.challenges}
            renderRow= {(rowData) => <TouchableHighlight
                style={styles.touchableHighlight}
                underlayColor='#949494'
                onPress={this._onViewChallenge}>
                <Text style={styles.buttonText}>{rowData.attributes.title}</Text>
              </TouchableHighlight>}
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

  _onViewChallenge: function () {
    this.props.navigator.push({
      name: 'Single Challenge',
      passProps: {
        challenge: this.props.challengeJson.data[0]
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
});

module.exports = ChallengesView;
