import React, { useState } from "react";
import { Text, View, Image, Button, TextInput } from "react-native";

import styles from "../styles";

const Separator = () => <View style={styles.separator} />;

const ActionScreen = () => {
  const [handle, setHandle] = useState("");
  return (
    <View style={styles.viewAction}>
      <Text style={styles.actionTitle}>ENTER THE TWITTER HANDLE</Text>

      <TextInput
        style={styles.actionText}
        placeholder="@"
        onChangeText={(givenHandle) => setHandle(givenHandle)}
        defaultValue={handle}
      ></TextInput>

      <Text>BOT OR NOT? : </Text>
      <Text>POSITIVE OR NEGATIVE? : </Text>
      <Text>AVERAGE TOPIC? :</Text>
    </View>
  );
};

export default ActionScreen;
