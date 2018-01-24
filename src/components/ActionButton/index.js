'use strict';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, TouchableHighlight, AlertIOS } from 'react-native';
import { firebaseDb, firebaseAuth } from '../../firebase';


const Button = styled.View`
  width: 100%;
  background-color: #1FBBD2;
`;

const MainText = styled.Text`
  text-align: center;
`

const addItem = (addTodo) => {
  AlertIOS.prompt(
    'Add New Item',
    null, [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'Add',
        onPress: text => {
          addTodo(text)
        }
      },
    ],
    'plain-text'
  );
}

const ActionButton = ({ addTodo }) => {
  return (
    <Button 
      style={styles.action}       
    >
      <TouchableHighlight
        underlayColor={constants.actionColor}
        onPress = {
          () => addItem(addTodo)
        }
    >
        <MainText>ADD</MainText>
      </TouchableHighlight>
    </Button>
  );
}

const styles = StyleSheet.create({
  action: {
    justifyContent: 'center',
    backgroundColor: '#1FBBD2',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  actionText: {
    
  }
});

const constants = {
    actionColor: '#24CE84'
};

export default ActionButton;