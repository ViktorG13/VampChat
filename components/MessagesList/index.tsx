import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import Message from "../Messages";
import InputMessage from "../InputMessage";
import MessageHeader from "../MessageHeader";

export default function MessagesList() {
  const username = "user1";
  const MESSAGES = [
    {
      id: "0",
      username: "user1",
      content: "Mensagem do user 1",
    },
    {
      id: "1",
      username: "user2",
      content: "Mensagem do user 2",
    },
    {
      id: "2",
      username: "user3",
      content: "Mensagem do user 3",
    },
    {
      id: "23",
      username: "user1",
      content: "Mensagem do user 3",
    },
    {
      id: "25",
      username: "user1",
      content: "Mensagem do user 3",
    },
    {
      id: "54",
      username: "user3",
      content: "Mensagem do user 3",
    },
    {
      id: "544",
      username: "user3",
      content: "Mensagem do user 3",
    },
    {
      id: "504",
      username: "user3",
      content: "Mensagem do user 3",
    },
    {
      id: "645",
      username: "user4",
      content: "Mensagem do user 3",
    },
  ];
  
  const renderMessages = ({ item }: any) => {
    return (
      <Message
        username={item.username}
        content={item.content}
        isSended={username.trim() === item.username.trim()}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <MessageHeader
        usersnames={MESSAGES.reduce((usernames: String[], message) => {
          const trimmedUsername: String = message.username.trim().toLowerCase();
          if (!usernames.includes(trimmedUsername)) {
            if (trimmedUsername === username && !usernames.includes("You")) {
              usernames.push("You");
            } else if (trimmedUsername !== username) {
              usernames.push(trimmedUsername);
            }
          }
          return usernames;
        }, []).join(" & ")}
      />

      <FlatList
        style={styles.messagesContainer}
        // inverted={true}
        data={MESSAGES}
        renderItem={(message) => renderMessages(message)}
        keyExtractor={(message) => message.id}
        scrollsToTop={false}
        automaticallyAdjustKeyboardInsets={true}
      />

      <InputMessage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    borderRadius: 5,
    maxHeight: "90%",
    overflow: "scroll",
    paddingVertical: 10,
    paddingHorizontal: 7,
    justifyContent: "flex-end",
    backgroundColor: "#FFFFFFFF",
    // shadowRadius: 100,
    // shadowColor: "#000000",
    // shadowOffset: {width: 100, height: 100},
  },
  messagesContainer: {
    flex: 1,
    gap: 20,
    width: "100%",
    height: "50%",
  },
});
