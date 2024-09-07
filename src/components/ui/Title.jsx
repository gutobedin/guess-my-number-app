import { StyleSheet, Text } from "react-native";

export default function Title({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
    padding: 12,
  },
});
