import React from 'react';
import styled from 'styled-components/native';
import { View, Text, StyleSheet  } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { firebaseAuth } from '../../firebase';
import LoginForm from '../Form';
import { signIn, signInSuccess} from '../../action/firebase';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.getEmail = this.getEmail.bind(this);
    this.getPassword = this.getPassword.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.isLogin !== this.props.isLogin && nextProps.isLogin ){
        this.props.navigation.navigate('Main');
    }
  }

  getEmail(value) {
    this.setState({
      account: value
    })
  }

  getPassword(value) {
    this.setState({
      password: value
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <LoginForm placeholder="Email" Icon="user-o" getdata={this.getEmail} />
        <LoginForm secure={true} placeholder="Password" Icon="lock" getdata = {this.getPassword}/>
        <View>
          <Button
            large
            title='Login'
            backgroundColor="#00A8FE"
            buttonStyle={{
                marginTop: 50,
                width: '100%',
            }}
            onPress={() => this.props.signIn('prodigygod0209@gmail.com', 'windsky0209')}
          />
          <Button
            large
            title='Sign UP'
            backgroundColor="#00A8FE"
            buttonStyle={{
                marginTop: 20,
                width: '100%'
            }}
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
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

const mapDispatchToProps = {
  signIn: signIn,
  signInSuccess: signInSuccess
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.Auth.isLogin
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
