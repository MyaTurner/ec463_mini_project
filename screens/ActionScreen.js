import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, TextInput } from "react-native";

import styles from "../styles";
import fakeData from "../fakeData";
import getUserInfo from "../services/getUserInfo";

// Get fake data
const accounts = fakeData();

// Define components
const Separator = () => <View style={styles.separator} />;

const InformationBlock = ({ userInfo, loading }) => {
  let content;

  if (loading) {
    content = <ActivityIndicator size="large" />;
  } else {
    content = (
      <View style={styles.viewAction}>
        <Text style={styles.actionText}>
          BOT OR NOT? : {userInfo?.botOrnot}
        </Text>
        <Separator />
        <Text style={styles.actionText}>
          POSITIVE OR NEGATIVE? : {userInfo?.posOrneg}
        </Text>
        <Separator />
        <Text style={styles.actionText}>
          AVERAGE TOPIC? : {userInfo?.avgTopic}
        </Text>
        <Separator />
      </View>
    );
  }
  return <View style={styles.viewAction}>{content}</View>;
};

const ActionScreen = () => {
  const [handle, setHandle] = useState("");
  const [loading, setloading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let mounted = true;
    getUserInfo(handle).then((info) => {
      if (mounted) {
        setUserInfo(info);
      }
    });
    return () => {
      mounted = false;
    };
  }, [handle]);

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
