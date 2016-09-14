import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  AlertIOS,
} from 'react-native';

var styles = require("../components/styles");
var credentials = require("../environment");

var ChallengeView = React.createClass({
  getInitialState: function() {
    return {
      winner: this.props.challenge.attributes.winner
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {this.props.challenge.attributes.title}
        </Text>
        <View style={styles.messageBox}>
          <Text style={styles.heading}>
            {this.props.challenge.attributes.description}
          </Text>
        </View>
        <View style={styles.messageBox}>
          <Text style={styles.heading}>
            {this.state.winner}
          </Text>
        </View>
        <TouchableHighlight
          style={styles.callApiButton}
          underlayColor='#949494'
          onPress={this._onCompleteChallenge}>
          <Text>Set Victor</Text>
        </TouchableHighlight>
      </View>
    )
  },

  _onCompleteChallenge: function () {
    fetch(credentials.url + "/api/v2/users/" + this.props.challenge.attributes.challengers[1], {
      method: "GET",
      headers: {
        "Authorization": credentials.token,
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      AlertIOS.alert(
        this.props.challenge.attributes.title,
        "Who won?",
        [
          {text: this.props.profile.nickname, onPress: () => this._setWinner(this.props.profile.nickname)},
          {text: responseJson.nickname, onPress: () => this._setWinner(responseJson.nickname)}
        ]
      )
    })
  },

  _setWinner: function(winner) {
    fetch("http://localhost:3000/challenges/" + this.props.challenge.id, {
      method: "PATCH",
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: {
          "id": this.props.challenge.id,
          "type": "challenges",
          "attributes": {
            "winner": winner
          }
        }
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ winner: winner })
    })
  }
});

module.exports = ChallengeView;
