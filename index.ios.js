/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 var React = require('react');
 var ReactNative = require('react-native');
 var Auth0Lock = require('react-native-lock');
 var credentials = require('./environment');

 var lock = new Auth0Lock(credentials);

 var {
   AppRegistry,
   AsyncStorage,
   StyleSheet,
   Text,
   View,
   TouchableHighlight,
   AlertIOS,
 } = ReactNative;

 var ChallengeAccepted = React.createClass({

   async _onValueChange(item, selectedValue) {
     try {
       await AsyncStorage.setItem(item, selectedValue);
     } catch (error) {
       console.log('AsyncStorage error: ' + error.message);
     }
   },

   async _userLogout() {
     try {
       await AsyncStorage.removeItem(STORAGE_KEY);
       AlertIOS.alert("Logout Success!")
     } catch (error) {
       console.log('AsyncStorage error: ' + error.message);
     }
   },

   _userSignup() {
     var value = this.refs.form.getValue();
     if (value) { // if validation fails, value will be null
       fetch("http://localhost:3001/users", {
         method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           username: value.username,
           password: value.password,
         })
       })
       .then((response) => response.json())
       .then((responseData) => {
         this._onValueChange(STORAGE_KEY, responseData.id_token),
         AlertIOS.alert(
           "Signup Success!"
         )
       })
       .done();
     }
  },

  _onLogin() {
    lock.show({}, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      // Authentication worked!
      console.log('Logged in with Auth0!');
    });
  },

   render() {
     return (
       <View style={styles.container}>
         <View style={styles.row}>
           <Text style={styles.title}>Profile</Text>
         </View>
         <View style={styles.row}>
           <TouchableHighlight style={styles.button} onPress={this._onLogin} underlayColor='#9E81DB'>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableHighlight>
         </View>
       </View>
     );
   }
 });

 var styles = StyleSheet.create({
   container: {
     justifyContent: 'center',
     marginTop: 50,
     padding: 20,
     backgroundColor: '#ffffff',
   },
   title: {
     fontSize: 30,
     alignSelf: 'center',
     marginBottom: 30
   },
   buttonText: {
     fontSize: 18,
     color: 'white',
     alignSelf: 'center'
   },
   button: {
     height: 36,
     backgroundColor: '#5D35B5',
     borderColor: '#5D35B5',
     borderWidth: 1,
     borderRadius: 8,
     marginBottom: 10,
     alignSelf: 'stretch',
     justifyContent: 'center'
   },
 });

AppRegistry.registerComponent('ChallengeAccepted', () => ChallengeAccepted);
