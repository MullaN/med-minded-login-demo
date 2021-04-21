import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './Components/Login';

const App = () => {
  const [message, setMessage] = useState('');

  const submitLogin = ({name, email, password}) => {
    setMessage(`Logged in with name ${name}, email ${email}, password ${password}`);
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.appText}>
        Med Minded
      </Text>
      <Login submitLogin={submitLogin}/>
      <Text>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  appText: {
    fontSize: 40
  }
});

export default App;
