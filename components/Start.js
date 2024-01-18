import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const bgImage = require("../img/bg-image.png");

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <Text style={styles.textHeader}>Welcome to {"\n"}ChatApp!</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Type your username here"
          placeholderTextColor={"white"}
        ></TextInput>
        <Text style={styles.bgColorText}>Choose your background color</Text>
        <View style={styles.bgButtonBox}>
          {/* bg color button 1 */}
          <TouchableOpacity
            style={[styles.colorButton, styles.colorButton1]}
            onPress={() =>
              setSelectedColor(styles.colorButton1.backgroundColor)
            }
          />
          {/* bg color button 2 */}
          <TouchableOpacity
            style={[styles.colorButton, styles.colorButton2]}
            onPress={() =>
              setSelectedColor(styles.colorButton2.backgroundColor)
            }
          />
          {/* bg color button 3 */}
          <TouchableOpacity
            style={[styles.colorButton, styles.colorButton3]}
            onPress={() =>
              setSelectedColor(styles.colorButton3.backgroundColor)
            }
          />
          {/* bg color button 4 */}
          <TouchableOpacity
            style={[styles.colorButton, styles.colorButton4]}
            onPress={() =>
              setSelectedColor(styles.colorButton4.backgroundColor)
            }
          />
        </View>

        {/* chat button */}
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() =>
            navigation.navigate("Chat", {
              name: name,
              color: selectedColor,
            })
          }
        >
          <Text style={styles.buttonText}>Start Chatting</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 45,
    opacity: 0.8,
  },
  textInput: {
    color: "#FFFFFF",
    width: "88%",
    padding: 15,
    borderRadius: 8,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  bgColorText: {
    color: "#FFFFFF",
    marginBottom: 15,
    marginTop: 10,
  },
  bgButtonBox: {
    display: "flex",
    flexDirection: "row",
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 10,
  },
  colorButton1: {
    backgroundColor: "#090C08",
  },
  colorButton2: {
    backgroundColor: "#474056",
  },
  colorButton3: {
    backgroundColor: "#8A95A5",
  },
  colorButton4: {
    backgroundColor: "#6C7B54",
  },
  chatButton: {
    width: "88%",
    backgroundColor: "#757083",
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Start;
