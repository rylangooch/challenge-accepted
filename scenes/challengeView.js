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
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Challenge Title/Description
        </Text>
        <View style={styles.messageBox}>
        
        </View>
      </View>
    )
  }
});

module.exports = ChallengeView;
