import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import ActionScreen from "../screens/ActionScreen";

const screens = {
  Home: {
    screen: HomeScreen,
  },

  BotOrNot: {
    screen: ActionScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
