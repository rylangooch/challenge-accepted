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

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var ChallengesView = React.createClass({
  getInitialState: function() {
    console.log("initial");
    return {
      challenges: ds.cloneWithRows(this.props.challengesArray)
    }
  },

  render: function() {
    console.log("render")
    console.log(this.state.challenges)
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Challenges
        </Text>
        <View style={styles.messageBox}>
          <ListView
            dataSource={this.state.challenges}
            renderRow= {(rowData) => this._renderRow(rowData)}
          />
        </View>
      </View>
    );
  },

  _renderRow: function(rowData) {
    console.log("render row")
    console.log(rowData.attributes.title)
    return (
      <TouchableHighlight style={styles.touchableHighlight} onPress={()=> this._onViewChallenge(rowData)}>
          <Text style={styles.buttonText}>{rowData.attributes.title}</Text>
      </TouchableHighlight>
    )
  },

  _onViewChallenge: function (rowData) {
    this.props.navigator.push({
      name: 'Single Challenge',
      passProps: {
        challenge: rowData
      }
    });
  }
});
module.exports = ChallengesView;
