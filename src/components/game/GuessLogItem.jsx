import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

export default function GuessLogItem({ roundNumber, guessNumber }) {
  return (
    <View style={styles.guessLogItem}>
      <Text style={styles.guessLogText}>
        Round {roundNumber}: {guessNumber}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guessLogItem: {
    marginTop: 5,
    borderRadius: 15,
    padding: 12,
    margin: 8,
    backgroundColor: Colors.primary800,
  },
  guessLogText: {
    color: "white",
    fontSize: 16,
  },
});
