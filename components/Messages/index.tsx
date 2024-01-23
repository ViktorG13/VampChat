import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MessageTypes = {
  username: String;
  content: String;
  isSended: Boolean;
};

export default function Message({ username, content, isSended }: MessageTypes) {
  return (
    <View style={isSended ? styles.messageSended : styles.messageReceived}>
      <Text style={styles.messageHeader}>{username}</Text>
      <Text style={styles.messageBody}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageReceived: {
    padding: 10,
    width: "auto",
    maxWidth: "65%",
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: "flex-start",
    backgroundColor: "#A000F5",
  },

  messageSended: {
    padding: 10,
    width: "auto",
    maxWidth: "65%",
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: "flex-end",
    backgroundColor: "#00aFFFFF",
  },

  messageHeader: {
    fontSize: 25,
    paddingBottom: 5,
    color: "#FFFFFF",
    fontWeight: "700",
    textTransform: "capitalize",
},

messageBody: {
    fontSize: 20,
    paddingBottom: 5,
    color: "#FFFFFF",
    textTransform: "capitalize",
  },
});
