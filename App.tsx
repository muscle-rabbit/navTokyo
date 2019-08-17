/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Fragment, useState} from 'react';
import {Text, Button} from 'react-native';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <Text>count is: {count}</Text>
      <Button
        title={'count up'}
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title={'count down'}
        onPress={() => {
          setCount(count - 1);
        }}
      />
      <Button
        title={'reset'}
        onPress={() => {
          setCount(0);
        }}
      />
    </Fragment>
  );
};

export default App;
