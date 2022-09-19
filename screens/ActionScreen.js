import React, { useState } from "react";
import { Text, View, ActivityIndicator, TextInput } from "react-native";

import styles from "../styles";
import fakeData from "../fakeData";

// Get fake data
const data = fakeData();

// Define components
const Separator = () => <View style={styles.separator} />;

const EnterTwitterHandle = ({ handle, setHandle }) => (
  <View style={styles.viewAction}>
    <Text style={styles.actionTitle}>ENTER THE TWITTER HANDLE</Text>

    <TextInput
      style={styles.actionText}
      placeholder="@"
      onChangeText={(givenHandle) => setHandle(givenHandle)}
      defaultValue={handle}
    ></TextInput>
  </View>
);

const ActionScreen = () => {
  const [handle, setHandle] = useState("");
  const [showLoading, setShowloading] = useState(true);

  // Find the user information for given twitter handle
  if (handle in data) {
    const userInfo = data[handle];
    console.log(userInfo);
  }
  return (
    <View style={styles.viewAction}>
      <EnterTwitterHandle
        setHandle={setHandle}
        handle={handle}
      ></EnterTwitterHandle>

      <Separator />
      <Separator />
      <Separator />
      <Separator />
      {showLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.actionText}>
            BOT OR NOT?: {/*userInfo.botOrnot */}
          </Text>
          <ActivityIndicator />
          <Separator />
          <Text style={styles.actionText}>
            POSITIVE OR NEGATIVE?: {/*userInfo.posOrneg */}
          </Text>
          <Separator />
          <Text style={styles.actionText}>
            AVERAGE TOPIC?: {/*userInfo.avgTopic */}
          </Text>
          <Separator />
        </>
      )}
    </View>
  );
};

export default ActionScreen;
