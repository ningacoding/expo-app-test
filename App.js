import React, {Component} from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, Text, View} from "react-native";
import AppLoading from 'expo-app-loading';
import {Root} from "native-base";
import {Provider} from "unstated";

export default class App extends Component {

  state = {isReady: false};

  async componentDidMount() {
    try {
      // removed code

    } catch (e) {
      console.error(e);
    } finally {
      this.setState({isReady: true});
    }

  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading/>
      );
    }
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#eaeaea"}}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                              style={{flex: 1, backgroundColor: "#eaeaea"}}>
          <StatusBar
            backgroundColor="rgba(0, 0, 0, 0.20)"
            barStyle="light-content"
            translucent
            animated
          />
          <Provider>
            <Root>
              <View style={{backgroundColor: "#343434", flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Text style={{color: "#FFFFFF"}}>
                  {"App is running..."}
                </Text>
              </View>
            </Root>
          </Provider>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

}
