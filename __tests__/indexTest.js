'use strict';
import 'react-native';
import React from 'react';
import ChallengeAccepted from '../index.ios';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ChallengeAccepted />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
