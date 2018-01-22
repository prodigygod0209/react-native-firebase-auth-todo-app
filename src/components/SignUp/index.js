import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from '../Form';
import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { connect } from 'react-redux'
import styled from 'styled-components/native';
import { firebaseAuth } from '../../firebase';
import { signUp } from '../../action/firebase';


const FormWrap = styled.View`
    width: 80%;
`
class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      account: '',
      password: '',
    } 
      this.getEmail = this.getEmail.bind(this);
      this.getPassword = this.getPassword.bind(this);
  }

  getEmail(value){
      this.setState({
          account: value
      })
  }

  getPassword(value){
      this.setState({
          password: value
      })
  }

  render(){
    const { signUp,navigation } = this.props;
    return(
        <View style={styles.container}>
            <FormWrap>
                <FormLabel>Email</FormLabel>
                <FormInput  onChangeText={(value) => this.getEmail(value)} />
                <FormLabel>Password</FormLabel>
                <FormInput id="account"
                    secureTextEntry={true}
                    onChangeText={(value) => this.getPassword(value)}
                />
                <Button
                    large
                    icon={{ name: 'envira', type: 'font-awesome' }}
                    title='SUBMIT'
                    buttonStyle={{
                        marginTop: 20,
                    }}
                    onPress={() => signUp(this.state.account, this.state.password, navigation)}
                />
            </FormWrap>
        </View>
    );
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

const mapDispatchToProps = {
    signUp: signUp,
}

export default connect(null, mapDispatchToProps)(SignUp);