import React from "react";
import { Text, View, Image, Button, Alert } from "react-native";

import styles from "../styles";

const HomeScreen = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require("../assets/robot.png")} />
      <Text style={styles.titletext}>Are they a Bot or Not?</Text>
      <Text style={styles.basetext}>
        MAKE SURE THE TWEETS YOU SEE ARE FROM REAL PEOPLE
      </Text>

      <Button
        title="Click to Find the Bots"
        onPress={() => Alert.alert("Button worked!")}
        color="#FFFFFF"
      ></Button>
    </View>
  );
};

export default HomeScreen;
