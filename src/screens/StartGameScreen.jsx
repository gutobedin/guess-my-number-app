import { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ onPickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(input) {
    setEnteredNumber(input);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => resetInputHandler(),
        },
      ]);
      return;
    }
    onPickedNumber(chosenNumber);
    setEnteredNumber("");
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText style={styles.instructionText}>
          Enter a Number!
        </InstructionText>
        <TextInput
          placeholder="00"
          keyboardType="number-pad"
          style={styles.textInput}
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={(text) => numberInputHandler(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.viewButton}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.viewButton}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: "#eeeeee",
    borderColor: "#eeeeee",
    color: Colors.primary500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
  },
  instructionText: {
    color: Colors.gray,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
  viewButton: {
    flex: 1,
  },
});
