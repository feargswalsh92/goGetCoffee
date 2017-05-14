import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeView from './components/HomeView/HomeView';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = (props) => {

  }

  render() {
    return (
      <View style={styles.container}>
          <HomeView />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#221D23'
  },
});
