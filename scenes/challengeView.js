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
    console.log(this.props.commentJson);

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
      </View>
    )
  },

});

module.exports = ChallengeView;
