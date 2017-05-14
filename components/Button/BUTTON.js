import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const BUTTON = (props) => {
  return (
    <View style={ style.button }>
      <Button
        title='Get Java'
        onPress={ props.handlePress }
        color='#FFF'
      />
    </View>

  )
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#DF2935',
    width: 300,
  }
});



export default BUTTON;
