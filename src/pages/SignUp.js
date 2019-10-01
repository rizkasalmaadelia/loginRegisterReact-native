import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  // StatusBar,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';

import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />

        <Form type="Signup" />

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>

          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },

  signupTextCont: {
    flexGrow: 1,

    alignItems: 'flex-end',

    justifyContent: 'center',

    paddingVertical: 16,

    flexDirection: 'row',
  },

  signupText: {
    color: 'rgba(0, 0,0,0.2)',
    fontSize: 16,
  },

  signupButton: {
    color: '#6DC88D',

    fontSize: 16,

    fontWeight: '500',
  },
});
