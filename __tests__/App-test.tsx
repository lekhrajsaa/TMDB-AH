import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import App from '../App';

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();

  // const {getByTestId} = render(<HomeScreen navigation={undefined} />);
  // const button = getByTestId('test');
  // const text = getByTestId('text');

  // fireEvent.changeText(text, 'Showing');
  // fireEvent.press(button);
});
