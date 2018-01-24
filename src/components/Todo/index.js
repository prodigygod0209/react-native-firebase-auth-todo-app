import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import ActionButton from '../ActionButton';
import { addTodoList } from '../../action/todo.js';

const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;
const Top = styled.View`
  width: 100%;
  height: 20px;
`;
const Header = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const HeaderTitle = styled.Text`
  font-size: 22px;
  color: #fff;
`;
const ItemList = styled.ScrollView`
   width: 80%;
   flex: 1;
`;
class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() { 
    return (
      <Container style={styles.container}>
        <Top></Top>
        <Header>
          <HeaderTitle>To Do</HeaderTitle>
        </Header>
        <ItemList scrollEventThrottle={16}>
        </ItemList>
        <ActionButton addTodo={addTodoList(this.props.uid)}/>
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


const mapStateToProps = (state) => {
  return { 
    uid: state.info.uid
  }
}

const mapDispatchToProps = {
  addTodoList: addTodoList
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
