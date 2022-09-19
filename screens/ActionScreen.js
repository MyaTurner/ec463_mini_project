import React, { useState } from "react";
import { Text, View, Image, Button, TextInput } from "react-native";

import styles from "../styles";
import fakeData from "../fakeData";

const Separator = () => <View style={styles.separator} />;

const data = fakeData();

const ActionScreen = () => {
  const [handle, setHandle] = useState("");

  // Find the user information for given twitter handle
  const userInfo = data[handle];
  console.log(userInfo);
  return (
    <View style={styles.viewAction}>
      <Text style={styles.actionTitle}>ENTER THE TWITTER HANDLE</Text>

      <TextInput
        style={styles.actionText}
        placeholder="@"
        onChangeText={(givenHandle) => setHandle(givenHandle)}
        defaultValue={handle}
      ></TextInput>

      <Separator />
      <Separator />
      <Separator />
      <Separator />

      <Text style={styles.actionText}>BOT OR NOT? : </Text>
      <Separator />
      <Text style={styles.actionText}>POSITIVE OR NEGATIVE? :</Text>
      <Separator />
      <Text style={styles.actionText}>AVERAGE TOPIC? :</Text>
      <Separator />
    </View>
  );
};

export default ActionScreen;
