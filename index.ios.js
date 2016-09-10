var React = require('react');
var ReactNative = require('react-native');
var Auth0Lock = require('react-native-lock');
var credentials = require('./environment');

var lock = new Auth0Lock(credentials);

var WelcomeView = require('./welcomeView');
var ProfileView = require('./profileView');
var ChallengesView = require('./challengesView');
var NewChallengeView = require('./newChallengeView');

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
  }
})

var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
     if(index > 0) {
       return (
         <TouchableHighlight
           underlayColor="transparent"
           onPress={() => { if (index > 0) { navigator.pop() } }}>
           <Text style={ styles.leftNavButtonText }>Back</Text>
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

 const styles = StyleSheet.create({
   navigator: {
     flex: 1,
   },
   title: {
     marginTop:4,
     fontSize:16
   },
   leftNavButtonText: {
    	fontSize: 18,
     marginLeft:13,
     marginTop:2
   },
   rightNavButtonText: {
     fontSize: 18,
     marginRight:13,
     marginTop:2
   },
   nav: {
     height: 60,
     backgroundColor: '#efefef'
   }
 });

AppRegistry.registerComponent('ChallengeAccepted', () => ChallengeAccepted);
