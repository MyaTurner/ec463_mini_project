import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ActionScreen from "./screens/ActionScreen";

const App = () => {
  return (
    <>
      <HomeScreen></HomeScreen>
    </>
  );
};

export default App;
