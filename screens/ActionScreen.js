import React, { useState } from "react";
import { Text, View, ActivityIndicator, TextInput } from "react-native";

import styles from "../styles";
import fakeData from "../fakeData";

// Get fake data
const data = fakeData();

// Define components
const Separator = () => <View style={styles.separator} />;

const InformationBlock = ({ userInfo, loading }) => {
  let content;

  if (loading) {
    content = <ActivityIndicator size="large" />;
  } else {
    content = (
      <View style={styles.viewAction}>
        <Text style={styles.actionText}>BOT OR NOT?:</Text>
        <Separator />
        <Text style={styles.actionText}>POSITIVE OR NEGATIVE?:</Text>
        <Separator />
        <Text style={styles.actionText}>AVERAGE TOPIC?:</Text>
        <Separator />
      </View>
    );
  }
  return <View style={styles.viewAction}>{content}</View>;
};

const ActionScreen = () => {
  const [handle, setHandle] = useState("");
  const [loading, setloading] = useState(true);
  const [userInfo, setUserInfo] = useState("");

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

      <InformationBlock
        loading={loading}
        userInfo={userInfo}
      ></InformationBlock>
    </View>
  );
};

export default ActionScreen;
