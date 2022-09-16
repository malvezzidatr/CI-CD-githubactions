import React from 'react';
import {render} from '@testing-library/react-native';

import {GithubActions} from '.';

it('check if text exits on screen', () => {
  const {getByText} = render(<GithubActions />);

  const text = getByText('Github Action');
  expect(text).toBeTruthy();
});
