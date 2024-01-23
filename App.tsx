import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

import MessagesList from "./components/MessagesList";

export default function App() {
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  NavigationBar.setBehaviorAsync("inset-swipe");
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.addVisibilityListener(({ visibility }) => {
    if (visibility) {
      delay(1000).then(() => NavigationBar.setVisibilityAsync("hidden"));
    }
  });

  return (
    <View style={styles.container}>
      <MessagesList />
      <StatusBar style="light" translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aFFFFF",
  },
});
