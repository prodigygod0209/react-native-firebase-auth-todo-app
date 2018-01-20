import React from 'react';
import { View, Text, TextInput }  from 'react-native';
import styled from "styled-components/native";
import { FormLabel, FormInput, FormValidationMessage, Icon  } from 'react-native-elements'
const LoginForm = (props) => {
    return(
        <InputBox>
            <View style={{width: 30,}}>
              <Icon
                name={props.Icon}
                type='font-awesome'
                color='#FFF'
                size = {30}
              />
            </View>
            <Input 
                placeholder={props.placeholder}
                placeholderTextColor="#fff"
                secureTextEntry={props.secure}
            />
        </InputBox>
    )
}

const InputBox = styled.View`
    flex-direction: row;
    width: 80%;
    height: 40px;
    margin-top:10px;
    borderBottomWidth: 1px;
    borderBottomColor: #fff;
    justify-content: flex-start;
    align-items: center;
`
const Input = styled.TextInput`
    width: 80%;
    font-size: 16px;
    color: #fff;
    padding-left: 10px;
`
export default LoginForm;
