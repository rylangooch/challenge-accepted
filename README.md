# Challenge Accepted
=================

Challenge Accepted is a social challenge app that adds an element of social accountability to the innocuous bet. Bet friends, not computers.

Let's say you've got to the end of a long week of coding and you fancy challenging a friend to a ping-pong match, the loser of which buys a winner a drink. You can use Challenge Accepted to publicly challenge your friend, where users can engage with the event with comments and eventually setting the winner.

The goal of this project was to learn a completely unfamiliar technology, React Native, and build an MVP all within 10 days. You can see the demo of the outcome [here](https://vimeo.com/182997446).

*Built  by [Jason Luong](https://github.com/j-luong), [Rylan Gooch](https://github.com/rylangooch),
[Terry Tilley](https://github.com/terrytilley) and [Zak Richardson](https://github.com/iamzakr)*

## To Get A Successful Build
* Install rnpm `npm install rnpm -g`
* Install Cocoapods `sudo gem install cocoapods`
* Run command `rnpm link` overwrite podfile when prompted
* Comment out the following block in the podfile `./ios/Podfile`
```
target 'ChallengeAcceptedTests' do
  inherit! :search_paths
  # Pods for testing
end
```
* `cd` into ios folder
* Run command `pod install`
`cd` back to home directory
* Run `react-native run-ios`

## User Stories

### MVP
```
As a new user
So that I can post a challenge
I want to be able to sign up to the service
```
```
As a user
So that I can challenge another user
I want to be able to create a challenge
```
```
As a user
So that users can see who won the challenge
I expect to be able to mark a challenge as complete and report the victor
```
### Extras
```
As a user
So that other users can see the challenge stakes
I want to be able to attach a stake to a challenge
```
```
As a user
So that I can see whether the stake of the challenge has been paid
I want to be able to see a settled status on a challenge
```
```
As a user
So that I can settle a challenge
I want to be able to report a stake as paid
```
```
As a user
So that I can find out information about other users
I expect users to have profile pages
```
```
As a user
So that I can see other users activity
I want to see their challenge history on their profile
```
