import React, { Component } from 'react';
var styles = require("../components/styles");

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var NewChallengeView = React.createClass({

  getInitialState() {
    return {
      challengeTitle: '',
      challengeAnte: ''
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          New Challenge
        </Text>
        <TextInput
          id="title"
          style={styles.input}
          placeholder="Title"
          value={this.state.challengeTitle}
          onChange={(event) => this.setState({challengeTitle: event.nativeEvent.text})}>
        </TextInput>
        <TextInput
          id="ante"
          style={styles.input}
          placeholder="Ante"
          value={this.state.challengeAnte}
          onChange={(event) => this.setState({challengeAnte: event.nativeEvent.text})}>
        </TextInput>
        <TouchableHighlight underlayColor='#949494' style={styles.button} onPress={this._viewFormSubmit}>
          <Text style={styles.buttonText}>
            Create Challenge
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  _viewFormSubmit: function() {
    let title = this.state.challengeTitle;
    let ante = this.state.challengeAnte;

    fetch('http://localhost:3000/challenges', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: [{
          "type": "challenges",
          "attributes": {
            "title": title,
            "ante": ante,
            "user-id": 1
          }
        }]
      })
    });
  }
});

module.exports = NewChallengeView;
