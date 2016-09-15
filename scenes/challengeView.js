import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  AlertIOS
} from 'react-native';

var styles = require("../components/styles");
var credentials = require("../environment");
var combinedResponses;

var ChallengeView = React.createClass({
  getInitialState: function() {
    this._fetchGravatars()
    this._fetchOwnerNames()
    return {
      winner: this.props.challenge.attributes.winner,
      ownerIcon: '',
      challengerIcon: ''
    }
  },

  render: function() {
    var displayWinner;
    var displayWinnerTitle;
    var displayWinnerButton;
    if (this.state.winner) {
      displayWinnerTitle = <Text style={styles.winnerTitle}>Winner</Text>;
      displayWinner = <Text style={styles.subtitle}>{this.state.winner}</Text>;
    } else {
      displayWinnerButton = <TouchableHighlight
        style={styles.mainButton}
        underlayColor='#949494'
        onPress={this._onCompleteChallenge}>
        <Text style={styles.mainButtonText}>Set Victor</Text>
      </TouchableHighlight>;
    }
    var ownerIcon = <Image style={styles.ownerIcon} source={{uri: this.state.ownerIcon}} />;
    var challengerIcon = <Image style={styles.challengerIcon} source={{uri: this.state.challengerIcon}} />;
    var ownerName = <Text style={styles.ownerName}>{this.state.ownerName}</Text>;
    var challengerName = <Text style={styles.challengerName}>{this.state.challengerName}</Text>;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {this.props.challenge.attributes.title}
        </Text>
        <View style={styles.playerIcons}>
          {ownerIcon}
          <Text style={styles.versus}> VS </Text>
          {challengerIcon}
        </View>
        <View style={styles.playerIcons}>
          {ownerName}
          {challengerName}
        </View>
        <View style={styles.messageBox}>
          <Text style={styles.description}>
            {this.props.challenge.attributes.description}
          </Text>
        </View>
        <View style={styles.messageBox}>
          <View>
            {displayWinnerTitle}
            {displayWinner}
          </View>
        </View>
          {displayWinnerButton}
      </View>
    )
  },

  _onCompleteChallenge: function () {
    fetch(credentials.url + "/api/v2/users/" + this.props.challenge.attributes.challenger, {
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
  },

  _fetchGravatars: function() {
    this._fetchOwnerIcon();
    this._fetchChallengerIcon();
  },

  _fetchOwnerIcon: async function() {
    try {
      let ownerResponse = await fetch('https://zakrichardsonme.eu.auth0.com/api/v2/users/'+this.props.challenge.attributes.owner, {
        method: "GET",
        headers: {
          'Authorization': credentials.token,
        }
      });
      let ownerResponseJson = await ownerResponse.json();
      this.setState({ownerIcon: ownerResponseJson.picture});
    } catch(error) {
      Alert.alert(
        "List Retrieval Failed",
        [
          {text: 'OK'},
        ]
      )
    };
  },

  _fetchChallengerIcon: async function() {
    try {
      let challengerResponse = await fetch('https://zakrichardsonme.eu.auth0.com/api/v2/users/'+this.props.challenge.attributes.challenger, {
        method: "GET",
        headers: {
          'Authorization': credentials.token,
        }
      });
      let challengerResponseJson = await challengerResponse.json();
      this.setState({challengerIcon: challengerResponseJson.picture});
    } catch(error) {
      Alert.alert(
        "List Retrieval Failed",
        [
          {text: 'OK'},
        ]
      )
    };
  },

  _fetchOwnerNames: function() {
    this._fetchOwnerName();
    this._fetchChallengerName();
  },

  _fetchOwnerName: async function() {
    try {
      let ownerResponse = await fetch('https://zakrichardsonme.eu.auth0.com/api/v2/users/'+this.props.challenge.attributes.owner, {
        method: "GET",
        headers: {
          'Authorization': credentials.token,
        }
      });
      let ownerResponseJson = await ownerResponse.json();
      this.setState({ownerName: ownerResponseJson.nickname});
    } catch(error) {
      Alert.alert(
        "List Retrieval Failed",
        [
          {text: 'OK'},
        ]
      )
    };
  },

  _fetchChallengerName: async function() {
    try {
      let challengerResponse = await fetch('https://zakrichardsonme.eu.auth0.com/api/v2/users/'+this.props.challenge.attributes.challenger, {
        method: "GET",
        headers: {
          'Authorization': credentials.token,
        }
      });
      let challengerResponseJson = await challengerResponse.json();
      this.setState({challengerName: challengerResponseJson.nickname});
    } catch(error) {
      Alert.alert(
        "List Retrieval Failed",
        [
          {text: 'OK'},
        ]
      )
    };
  }
});

module.exports = ChallengeView;
