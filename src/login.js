import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { autoInputChange } from "./actions/index";
import { connect } from "react-redux";

class Login extends Component {
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
          <Button title="LogIn" onPress={console.log(this.props.email)} />
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
export default connect(mapStateToProps, { autoInputChange })(Login);
