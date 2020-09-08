import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Login from "./login";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <View>
          <Login />
        </View>
      </Provider>
    );
  }
}
export default App;
