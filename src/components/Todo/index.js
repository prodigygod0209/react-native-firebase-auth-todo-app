import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import ActionButton from '../ActionButton';

const Container = styled.View`
  width: 100%;
  flex-direction: column;
`
class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Container style={styles.container}>
        <ActionButton />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2836',
  },
});


export default Todo;