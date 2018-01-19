import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../Form';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import styled from 'styled-components/native';
import { firebaseAuth } from '../../firebase';


const FormWrap = styled.View`
    width: 80%;
`
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(email,password){
        firebaseAuth.createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/email-already-in-use') {
                console.log('The password is too weak.');
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FormWrap>
                    <FormLabel>Email</FormLabel>
                    <FormInput  />
                    <FormLabel>Password</FormLabel>
                    <FormInput 
                        secureTextEntry={true}
                    />
                    <Button
                        large
                        icon={{name: 'envira', type: 'font-awesome'}}
                        title='SUBMIT' 
                        buttonStyle={{
                                marginTop: 20,
                        }}
                        onPress={() => this.handleClick('prodigygod0209@gmail.com','windsky0209')}
                    />
                </FormWrap>
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
export default SignUp;