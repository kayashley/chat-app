// import Gifted Chat
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { StyleSheet, KeyboardAvoidingView, Platform, View } from "react-native";
import { useEffect, useState } from "react";

const Chat = ({ route, navigation }) => {
  const { name } = route.params;
  const { color } = route.params;

  // messages
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });
    setMessages([
      // static message
      {
        _id: 1,
        text: "Hello Developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      // system message
      {
        _id: 2,
        text: "This is a system message",
        createdAt: new Date(),
        system: true,
      },
      // user message
      {
        _id: 3,
        text: "You joined the chat",
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  // sending messages, old messages will stay displayed
  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  // color of the message bubbles
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#0096FF",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />

      {/* keyboard does not hide message input field - android/ios */}
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
