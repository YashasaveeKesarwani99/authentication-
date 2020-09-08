import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { autoInputChange, login } from "./actions/index";
import { connect } from "react-redux";
import firebase from "firebase";
class Login extends Component {
  componentDidMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAflDrArjZysSKtkUw7UTPXi0oZKrZPL_g",
      authDomain: "react-native-authenticat-ea34c.firebaseapp.com",
      databaseURL: "https://react-native-authenticat-ea34c.firebaseio.com",
      projectId: "react-native-authenticat-ea34c",
      storageBucket: "react-native-authenticat-ea34c.appspot.com",
      messagingSenderId: "660179138565",
      appId: "1:660179138565:web:a220c7f1027986218a846c",
      measurementId: "G-F1VBS7JYF6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  login() {
    const { email, password } = this.props;

    this.props.login({ email, password });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.email}
          style={styles.Input}
          placeholder="Email"
          onChangeText={(text) =>
            this.props.autoInputChange({ field: "email", value: text })
          }
        />
        <TextInput
          value={this.props.password}
          style={styles.Input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) =>
            this.props.autoInputChange({ field: "password", value: text })
          }
        />
        <Text style={styles.Text}>
          <Button title="LogIn" onPress={this.login.bind(this)} />
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

const styles = {
  container: {
    margin: 20,
    marginTop: 150
  },
  Input: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    borderRadius: 5
  },
  Text: {
    marginLeft: 90
  }
};
export default connect(mapStateToProps, { autoInputChange, login })(Login);
