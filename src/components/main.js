import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import * as Auth from '../action/firebase';
import RootNavigation from '../navigations';
import Login from './Login';

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
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
  signInWithGithub: Auth.signInWithGithub
}

export default connect(null, mapDispatchToProps)(Main)