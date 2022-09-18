import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const App = () => {
  return (
    <View style={styles.view}>
      <Image source={require("./assets/robot.png")} />
      <Text>EC463: Senior Design Mini Project</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#119afb",
  },
});
export default App;
