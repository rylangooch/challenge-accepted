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

import DropDown, {
  Select,
  Option,
  OptionList,
} from 'react-native-selectme';

var NewChallengeView = React.createClass({
  getInitialState() {
    return {
      challengeTitle: '',
      challengeDescription: '',
      challengeAnte: '',
      friend: ''
    }
  },

  _getOptionList() {
    return this.refs['OPTIONLIST'];
  },

  _friend(user) {
   this.setState({
       ...this.state,
       friend: user
     });
   },

  render: function() {
    console.log(this.state.friend);
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          New Challenge for {this.props.user_id}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          value={this.state.challengeTitle}
          onChange={(event) => this.setState({challengeTitle: event.nativeEvent.text})}>
        </TextInput>

        <TextInput
          multiline={true}
          style={styles.inputTextArea}
          placeholder="Description"
          value={this.state.challengeDescription}
          onChange={(event) => this.setState({challengeDescription: event.nativeEvent.text})}>
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder="Ante"
          value={this.state.challengeAnte}
          onChange={(event) => this.setState({challengeAnte: event.nativeEvent.text})}>
        </TextInput>

          <Select
          style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}
          optionListRef={this._getOptionList.bind(this)}
          defaultValue="Select a friend to challenge"
          onSelect={this._friend.bind(this)}>
          {this.props.userList.map((list) => {
            return <Option value = {{userId: list.user_id}}> {list.nickname} </Option>
          })}
          </Select>

          <OptionList ref="OPTIONLIST"/>

        <TouchableHighlight underlayColor='#949494' style={styles.button} onPress={this._viewFormSubmit}>
          <Text style={styles.buttonText}>
            Create Challenge
          </Text>
        </TouchableHighlight>
      </View>
    );
  },

  _viewFormSubmit: function() {
    let title       = this.state.challengeTitle;
    let description = this.state.challengeDescription;
    let ante        = this.state.challengeAnte;
    let userId      = this.props.userId

    if (title == "" || description == "" || ante == "") {
      Alert.alert(
        "Error",
        "All fields must be completed",
        [
          {text: 'OK'}
        ]
      )
      return;
    }

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
            "description": description,
            "ante": ante,
            "owner": userId,
            "challengers": [userId, this.state.friend.userId]
          }
        }]
      })
    })
    .then((response) => {
      if (response.status == 201) {
        this.props.navigator.pop();
      } else {
        Alert.alert(
          "Failed to create challenge",
          [
            {text: 'OK'},
          ]
        )
      }
    })
    .catch((error) => {
      Alert.alert(
        "Failed to create challenge",
        [
          {text: 'OK'},
        ]
      )
    })
  }
});

module.exports = NewChallengeView;
