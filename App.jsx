import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./src/screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#2405af", "#0d1b63"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/dado.jpeg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.7,
  },
});
