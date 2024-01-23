import React from "react";
import { StyleSheet, Text, View } from "react-native";

type MessageHeaderTypes = {
  usersnames: string;
};

export default function MessageHeader({ usersnames }: MessageHeaderTypes) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{usersnames}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 40,
    textAlign: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    justifyContent: "center",
    borderBottomColor: "#aaaaaaaa",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
