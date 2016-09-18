import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  anteText: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 0,
    alignSelf: 'center',
    color: '#15204C'
  },
  anteTitle: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 100,
    marginBottom: 5,
    alignSelf: 'center',
    color: '#15204C',
    fontWeight: '600'
  },
  avatar: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  badge: {
    alignSelf: 'center',
    height: 110,
    width: 102,
    marginBottom: 80,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    color: '#000000',
    alignSelf: 'center'
  },
  challengerIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 40,
  },
  challengerName: {
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#FFF',
    marginRight: 10,
  },
  challengeList: {
    flex: 6,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efefef',
  },
  containerWelcome: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#15204C',
  },
  createChallengeButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 40,
    alignSelf: 'center',
    color: '#15204C'
  },
  dropDown: {
    width: 355,
    fontSize: 14,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c6c5c5',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 100,
    marginBottom: 40,
    alignSelf: 'center',
    color: '#15204C'
  },
  image: {
    flex: 3,
    alignSelf: 'center',
    width: 300,
    height: 180,
    marginTop: 100
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 10,
    margin: 10,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c6c5c5',
    backgroundColor: '#FFF'
  },
  inputTextArea: {
    height: 100,
    marginTop: 10,
    padding: 10,
    margin: 10,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#c6c5c5',
    backgroundColor: '#FFF'
  },

  leftNavButtonText: {
    fontSize: 18,
    marginLeft:13,
    marginTop:2
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  },
  mainButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#15204C',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    color: '#ffffff',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
  },
  nav: {
    height: 60,
    backgroundColor: '#efefef'
  },
  navigator: {
    flex: 1,
  },
  ownerIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 40,
  },
  ownerName: {
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#FFF',
    marginLeft: 10,
  },
  playerIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerNicknameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightNavButtonText: {
    fontSize: 18,
    marginRight:13,
    marginTop:2
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#15204C',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 4,
    color: '#15204C',
  },
  subtitleWelcome: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 4,
    color: '#fff',
  },


  title: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: '#15204C',
  },
  title: {
    marginTop:4,
    fontSize:16,
    fontWeight: 'bold'
  },
  titleWelcome: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: '#fff',
  },
  touchableHighlight: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#15204C',
    borderBottomWidth:1,
    borderBottomColor: '#15204C',
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  touchableHighlightTitle: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
  },
  touchableHighlightDescription: {
    color: '#f2f2f2',
    fontSize: 14,
    alignSelf: 'center',
    flexWrap: 'wrap'
  },
  versus: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 30,
    marginRight: 5,
    color: '#15204C',
  },
  welcome_title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: '#15204C',
  },
  welcomeButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeButtonText: {
    color: '#15204C',
  },
  winnerTitle: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 100,
    marginBottom: 5,
    alignSelf: 'center',
    color: '#15204C',
    fontWeight: '600'
  },
  winnerBox: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
});

module.exports = styles;
