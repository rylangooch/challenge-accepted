import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';

var styles = require("../components/styles");

var ChallengeView = React.createClass({

  render: function() {
    // console.log(this.props.challenge.id);
    // console.log(this.props.commentJson.data[0].attributes.message);

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {this.props.challenge.attributes.title}
        </Text>
        <View style={styles.messageBox}>
          <Text style={styles.heading}>
            {this.props.challenge.attributes.description}
          </Text>
          <Text style={styles.heading}>
            Comments
          </Text>
          <Text style={styles.subtitle}>
            {this.props.commentJson.data[0].attributes.message}
          </Text>
        </View>
        <TouchableHighlight
          style={styles.createChallengeButton}
          underlayColor='#949494'
          onPress={this._onCreateComment}>
          <Text>New Comment</Text>
        </TouchableHighlight>
      </View>
    )
  },

  _onCreateComment: function() {
    this.props.navigator.push({
      name: 'New Comment',
      passProps: {
        message: "Make a comment my friend",
        challengeId: this.props.challenge.id
      }
    });
  },

});

module.exports = ChallengeView;
