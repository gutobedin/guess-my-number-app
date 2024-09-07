import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: Colors.gray,
    borderRadius: 8,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary300,
    fontSize: 30,
    fontWeight: "bold",
  },
});
