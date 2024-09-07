import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRoundsListLength);
    }
  }, [currentGuess, userNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((currRounds) => [newRndNumber, ...currRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.InstructionText}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonContainer}>
            <View style={styles.viewButton}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
                <Ionicons size={22} name="remove-outline" />
              </PrimaryButton>
            </View>
            <View style={styles.viewButton}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
                <Ionicons size={22} name="add-outline" />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.flatListView}>
          <FlatList
            data={guessRounds}
            keyExtractor={(item) => item.toString()}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guessNumber={itemData.item}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
  },
  viewButton: {
    flex: 1,
  },
  InstructionText: {
    marginBottom: 12,
  },
  flatListView: {
    maxHeight: "55%",
  },
});
