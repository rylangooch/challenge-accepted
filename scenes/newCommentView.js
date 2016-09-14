import React, { Component } from 'react';
var styles = require("../components/styles");

import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var NewCommentView = React.createClass({

  getInitialState() {
    return {
      commentMessage: ''
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          New Comment
        </Text>

        <TextInput
          multiline={true}
          style={styles.inputTextArea}
          placeholder="Your comment"
          value={this.state.commentMessage}
          onChange={(event) => this.setState({commentMessage: event.nativeEvent.text})}>
        </TextInput>

        <TouchableHighlight underlayColor='#949494' style={styles.button} onPress={this._commentSubmit}>
          <Text style={styles.buttonText}>
            Add Comment
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  _commentSubmit: function() {
    let comment     = this.state.commentMessage;
    let challengeId = this.props.challengeId;

    if (comment == "" ) {
      Alert.alert(
        "Error",
        "All fields must be completed",
        [
          {text: 'OK'}
        ]
      )
      return;
    }

    fetch('http://localhost:3000/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
      body: JSON.stringify({
        data: [{
          "type": "comments",
          "attributes": {
            "user-id": 1,
            "challenge-id": challengeId,
            "message": comment
          }
        }]
      })
    })
    .then((response) => {
      if (response.status == 201) {
        this.props.navigator.pop();
      } else {
        Alert.alert(
          "Failed to add comment",
          [
            {text: 'OK'},
          ]
        )
      }
    })
    .catch((error) => {
      Alert.alert(
        "Failed to add comment",
        [
          {text: 'OK'},
        ]
      )
    })
  }
});

module.exports = NewCommentView;
