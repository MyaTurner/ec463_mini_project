import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const OpeningPage = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require("./assets/robot.png")} />
      <Text style={styles.titletext}>Are they a Bot or Not?</Text>
      <Text style={styles.basetext}>
        {" "}
        MAKE SURE THE TWEETS YOU SEE ARE FROM REAL PEOPLE
      </Text>
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

  image: {
    aspectRatio: 5,
    height: 150,
    resizeMode: "contain",
  },

  titletext: {
    fontFamily: "Quicksand",
    color: "#FFFFFF",
    fontSize: "30",
    fontWeight: "bold",
  },

  basetext: {
    fontFamily: "Montserrat",
    color: "#FFFFFF",
    fontSize: "11",
  },
});
export default OpeningPage;
