import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.ímage}
          source={require("../../assets/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderColor: Colors.gray,
    overflow: "hidden",
    borderWidth: 4,
    marginVertical: 40,
  },
  ímage: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 18,
    color: "white",
    marginVertical: 12,
    textAlign: "center",
  },
  highlight: {
    color: "#1df700",
    fontWeight: "bold",
  },
  title: {
    width: "100%",
  },
});
