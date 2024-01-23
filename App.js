// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyAOAjzRwZFZl1kvkEskeWSEbT2iPdZ51QA",
    authDomain: "chat-app-db-d30c7.firebaseapp.com",
    projectId: "chat-app-db-d30c7",
    storageBucket: "chat-app-db-d30c7.appspot.com",
    messagingSenderId: "994484392274",
    appId: "1:994484392274:web:70f4134fc4b69dfa682a8b",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
