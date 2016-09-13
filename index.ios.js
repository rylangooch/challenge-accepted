'use strict';
var React = require('react');
var ReactNative = require('react-native');
var Auth0Lock = require('react-native-lock');
var credentials = require('./environment');

var lock = new Auth0Lock(credentials);

var WelcomeView = require('./scenes/welcomeView');
var ProfileView = require('./scenes/profileView');
var ChallengeView = require('./scenes/challengeView');
var ChallengesView = require('./scenes/challengesView');
var NewChallengeView = require('./scenes/newChallengeView');
var NewCommentView = require('./scenes/newCommentView');
var styles = require('./components/styles');

 var {
   AppRegistry,
   AsyncStorage,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   AlertIOS,
   Navigator
 } = ReactNative;

 var ChallengeAccepted = React.createClass({
   render: function() {
       return (
         <Navigator style={styles.navigator}
           initialRoute={{ name: "Welcome"}}
           renderScene= { this.renderScene }
           navigationBar={
              <Navigator.NavigationBar
                style={ styles.nav }
                routeMapper={NavigationBarRouteMapper} />
              }
         />
       );
     },

  renderScene: function(route, navigator) {
    if (route.name == "Welcome") {
      return <WelcomeView navigator={navigator} {...route.passProps} />
     }
    if (route.name == "Profile") {
      return <ProfileView navigator={navigator} {...route.passProps} />
    }
    if (route.name == "Challenges") {
      return <ChallengesView navigator={navigator} {...route.passProps} />
    }
    if (route.name == "New Challenge") {
      return <NewChallengeView navigator={navigator} {...route.passProps} />
    }
    if (route.name == "Single Challenge") {
      return <ChallengeView navigator={navigator} {...route.passProps} />
    }
    if (route.name == "New Comment") {
      return <NewCommentView navigator={navigator} {...route.passProps} />
    }
  }
})

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
     var button
     (index === 1) ? button = "Logout" : button = "Back";

     if(index > 0) {
       return (
         <TouchableHighlight
           underlayColor="transparent"
           onPress={() => { if (index > 0) { navigator.pop() } }}>
           <Text style={ styles.leftNavButtonText }>{button}</Text>
         </TouchableHighlight>)
     }
     else { return null }
   },

   RightButton(route, navigator, index, navState) {
     return null
   },

   Title(route, navigator, index, navState) {
     return null
    //  return <Text style={ styles.title }>ChallengeAccepted</Text>
   }
 };

AppRegistry.registerComponent('ChallengeAccepted', () => ChallengeAccepted);
module.exports = ChallengeAccepted;
