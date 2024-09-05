import { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
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
    console.log("valid Number");
    setEnteredNumber("");
  }
  return (
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 100,
    backgroundColor: "#060146",
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
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
    color: "#1a0672",
    marginVertical: 8,
    fontWeight: "bold",
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
});
