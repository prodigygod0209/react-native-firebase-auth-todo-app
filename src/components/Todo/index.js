import React from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage, } from 'react-native-elements'
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { addTodoList, getTodoList, deleteData } from '../../action/todo.js';
import ActionButton from '../ActionButton';
import Items from '../items';


const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
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
   width: 100%;
   flex: 1;
`;
class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  }

  componentDidMount = () => {
    this.props.getTodoList(this.props.uid)
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.Todo.items !== nextProps.Todo.items){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.Todo.items)
      });
    }
  }

  render() { 
    console.log(this.state.dataSource)
    return (
      <Container style={styles.container}>
        <Top></Top>
        <Header>
          <HeaderTitle>To Do</HeaderTitle>
        </Header>
        <ItemList scrollEventThrottle={16}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => 
              <Items 
                content={rowData.content} 
                id={rowData.key} 
                delete={() => {deleteData(this.props.uid,rowData.key)}}
              />
            }
            enableEmptySections={true}
          />
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
    uid: state.Auth.info.uid,
    Todo: state.Todo
  }
}

const mapDispatchToProps = {
  addTodoList: addTodoList,
  getTodoList: getTodoList
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
