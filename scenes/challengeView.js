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
    console.log(this.props.commentJson.data[0].attributes.message);

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
      </View>
    )
  },

});

module.exports = ChallengeView;
