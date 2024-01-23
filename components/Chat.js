// import Gifted Chat
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { StyleSheet, KeyboardAvoidingView, Platform, View } from "react-native";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const Chat = ({ route, navigation, db }) => {
  const { name, backgroundColor, id } = route.params;
  const [messages, setMessages] = useState([]);

  // sending messages, old messages will stay displayed
  const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
  };

  let unsubMessages;

  useEffect(() => {
    navigation.setOptions({ title: name });

    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    unsubMessages = onSnapshot(q, (documentSnapshot) => {
      let newMessages = [];
      documentSnapshot.forEach((doc) => {
        newMessages.push({
          id: doc.id,
          ...doc.data(),
          createdAt: new Date(doc.data().createdAt.toMillis()),
        });
        setMessages(newMessages);
      });

      return () => {
        if (unsubMessages) unsubMessages();
        unsubMessages = null;
      };
    });
  }, []);

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
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: id,
          name: name,
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
