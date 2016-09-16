import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  ListView,
  ScrollView
} from 'react-native';

var styles = require("../components/styles");

var ChallengeView = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    return {
      comments: null
    }
  },

  componentWillMount: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.serverRequest = fetch(this.props.challenge.relationships.comments.links.related)
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ comments: ds.cloneWithRows(responseJson.data) })
    })
    .catch((error) => {
      console.error(error);
    });
  },

  componentWillUnMount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    console.log(this.state.comments);
    if(this.state.comments) {
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
            <ListView
              dataSource={this.state.comments}
              renderRow= {(rowData) => this._renderRow(rowData)}
            />
          </View>
          <TouchableHighlight
            style={styles.createChallengeButton}
            underlayColor='#949494'
            onPress={this._onCreateComment}>
            <Text>New Comment</Text>
          </TouchableHighlight>
        </View>
      )}
    return(
      <View></View>
    );
  },

  _renderRow: function(rowData) {
    return (
      <Text style={styles.subtitle}>
        {rowData.attributes.message}
      </Text>
    )
  },

  _getComments: function() {
    return fetch(this.props.challenge.relationships.comments.links.related)
    .then((response) => response.json())
    .then((responseJson) => {
      // console.log(responseJson);
      return responseJson.data;
    })
    .catch((error) => {
      console.error(error);
    });
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
