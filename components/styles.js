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
  navigator: {
    flex: 1,
  },
  logo: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  },
  title: {
    marginTop:4,
    fontSize:16,
    fontWeight: 'bold'
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
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#15204C',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
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
  playerNickname1: {

  },
  playerNickname2: {

  },
  challengeList: {
    flex: 6,
    justifyContent: 'center',
  },
  badge: {
    alignSelf: 'center',
    height: 110,
    width: 102,
    marginBottom: 80,
  },
  avatar: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  ownerIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginLeft: 40,
  },
  challengerIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 40,
  },
  ownerName: {
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#FFF',
    marginLeft: 10,
  },
  challengerName: {
    fontSize: 22,
    fontWeight: '400',
    alignSelf: 'center',
    color: '#FFF',
    marginRight: 10,
  },
  subtitle: {
    fontSize: 17,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 4,
    color: '#FFFFFF',
  },
  versus: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginRight: 5,
    color: '#FFFFFF',
  },
  welcome_title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5,
    color: '#FFFFFF',
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
  mainButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#639FAB',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtonText: {
    color: '#ffffff',
  },
  image: {
    flex: 3,
    alignSelf: 'center',
    width: 300,
    height: 180,
    marginTop: 100
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#639FAB',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#ffffff',
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 10,
    margin: 10,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
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
    borderColor: '#FFF',
    backgroundColor: '#FFF'
  },
  dropDown: {
    width: 355,
    fontSize: 14,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 10,
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
  touchableHighlight: {
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#639FAB',
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
  buttonText: {
    fontSize: 15,
    color: '#000000',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 100,
    marginBottom: 40,
    alignSelf: 'center',
    color: '#FFF'
  },
  winnerTitle: {
    fontSize: 24,
    fontWeight: '300',
    marginTop: 100,
    marginBottom: 5,
    alignSelf: 'center',
    color: '#FFF'
  },
  winnerBox: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
  description: {
    fontSize: 22,
    fontWeight: '400',
    marginTop: 40,
    alignSelf: 'center',
    color: '#FFF'
  },
});

module.exports = styles;
