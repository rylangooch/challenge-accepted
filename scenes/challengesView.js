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
    return {
      challenges: ds.cloneWithRows(this.props.challengesArray)
    }
  },

  render: function() {
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
    if (rowData.attributes.description.length >= 45) {
      var dots = "..."
    } else {
      var dots = ""
    }
    return (
      <TouchableHighlight style={styles.touchableHighlight} underlayColor='#949494' onPress={()=> this._onViewChallenge(rowData)}>
          <View>
            <Text style={styles.touchableHighlightTitle}>
              {rowData.attributes.title}
            </Text>
            <Text style={styles.touchableHighlightDescription}>
              {rowData.attributes.description.substring(0,45) + dots}
            </Text>
          </View>
      </TouchableHighlight>
    )
  },

  _onViewChallenge: function (rowData) {
    this.props.navigator.push({
      name: 'Single Challenge',
      passProps: {
        profile: this.props.profile,
        challenge: rowData
      }
    });
  }
});
module.exports = ChallengesView;
