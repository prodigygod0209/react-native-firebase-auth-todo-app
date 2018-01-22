'use strict';
import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, View, TouchableHighlight, AlertIOS } from 'react-native';
import { firebaseDb, firebaseAuth } from '../../firebase';


const Button = styled.View`
  width: 100%;
  background-color: #1FBBD2;
`;

const db = firebaseDb.ref().child('list')

const addItem = () => {
  AlertIOS.prompt(
    'Add New Item',
    null, [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'Add',
        onPress: (text) => {
          if (text == '') return
          firebaseDb.ref('users/' + 'DAr0qJeSpvMizKLaqNRBOo4kEQD3').push().set({
            content: text,
          })
        }
      },
    ],
    'plain-text'
  );
}


const ActionButton = () => {
  return (
    <Button 
      style={styles.action} 
           
    >
      <TouchableHighlight
        underlayColor={constants.actionColor}
        onPress = {
          () => addItem()
        }
    >
        <Text style={styles.actionText}>Test</Text>
      </TouchableHighlight>
    </Button>
  );
}

const styles = StyleSheet.create({
  action: {
    backgroundColor: '#1FBBD2',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  }
});

const constants = {
    actionColor: '#24CE84'
};

export default ActionButton;