import React from 'react';
import styled from 'styled-components/native';
import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  AlertIOS, 
  TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements'
import Swipeable from 'react-native-swipeable';

const Item = styled.View`
   margin-top: 20px;
   width: 100%;
   height: 60px;
   padding-left: 20px;
   padding-right: 20px;
   justify-content: center;
`
const ItemName = styled.Text`
   font-size: 24px;
   color: #fff;
`
const Delete = styled.TouchableOpacity`
   margin-top: 20px;
   height: 60px;
   padding-left: 20px;
   background: #1FBBD2;
   justify-content: center;
   shadowColor: rgba(0,0,0,0.30);
   shadowOpacity: .9;
   shadowOffset: 1px 2px ;
   shadowRadius: 1;
`

export default class Items extends React.Component {
  
  addItem(addTodo) {
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
          addTodo(text,this.props.id)
        }
      },
      ],
      'plain-text'
    );
  }
  render() {
    return (
      <Swipeable
        rightButtons={[
          <Delete onPress={() => this.addItem(this.props.addTodo)}>
            <Text>EDIT</Text>
          </Delete>
          , 
          <Delete onPress={this.props.delete}>
            <Text>DELETE</Text>
          </Delete>]}
      >
        <Item>
          <CheckBox
            title={this.props.content}
            checked={this.props.completed}
            
          />
          {/* <ItemName>{this.props.content}</ItemName> */}
        </Item>
      </Swipeable>
    );
  }
}