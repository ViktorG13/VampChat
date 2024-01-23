import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MessagesList() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.messagesContainer}>
        <View>
          <Text>User</Text>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
            explicabo assumenda magnam modi, consectetur aperiam porro velit
            nostrum illum perferendis, tempore exercitationem corrupti dolor
            possimus? Tenetur culpa itaque quibusdam error!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    borderRadius: 5,
    maxHeight: "90%",
    backgroundColor: "#FFFFFFFF",
},
  messagesContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});
