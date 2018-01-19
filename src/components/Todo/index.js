import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import styled from 'styled-components/native';


const FormWrap = styled.View`
    width: 80%;
`
class Todo extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>hello World</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B2836',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Todo;