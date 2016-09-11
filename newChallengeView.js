import React, { Component } from 'react';
var styles = require('./styles');

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

var NewChallengeView = React.createClass({
  // static get defaultProps() {
  //   return {
  //     title: 'New Challenge'
  //   };
  // }

  render: function() {
    return (
      <View style={styles.container}>
          <Text style={styles.heading}>
            Set your challenge
          </Text>
          <TextInput
            style={styles.input} placeholder="Title">
          </TextInput>
          <TextInput
            style={styles.input}
            placeholder="Ante">
          </TextInput>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
          </TouchableHighlight>
      </View>
    );
  },
});

module.exports = NewChallengeView;
