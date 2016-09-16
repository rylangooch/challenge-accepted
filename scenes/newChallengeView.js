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
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          New Challenge
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#999"
          value={this.state.challengeTitle}
          onChange={(event) => this.setState({challengeTitle: event.nativeEvent.text})}>
        </TextInput>

        <TextInput
          multiline={true}
          style={styles.inputTextArea}
          placeholder="Description"
          placeholderTextColor="#999"
          value={this.state.challengeDescription}
          onChange={(event) => this.setState({challengeDescription: event.nativeEvent.text})}>
        </TextInput>

        <TextInput
          style={styles.input}
          placeholder="Ante"
          placeholderTextColor="#999"
          value={this.state.challengeAnte}
          onChange={(event) => this.setState({challengeAnte: event.nativeEvent.text})}>
        </TextInput>

        <Select
          style={styles.dropDown}
          optionListRef={this._getOptionList.bind(this)}
          defaultValue="Select a friend to challenge"
          onSelect={this._friend.bind(this)}>
          {this.props.userList.map((list) => {
            return <Option value = {{userId: list.user_id}}> {list.nickname} </Option>
          })}
        </Select>

        <TouchableHighlight underlayColor='#949494' style={styles.mainButton} onPress={this._viewFormSubmit}>
          <Text style={styles.mainButtonText}>
            Create
          </Text>
        </TouchableHighlight>

        <OptionList ref="OPTIONLIST"/>
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

    fetch('https://pure-sierra-97917.herokuapp.com/challenges', {
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
            "challenger": this.state.friend.userId
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
