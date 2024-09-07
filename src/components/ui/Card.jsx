import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: 50,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    justifyContent: "center",
  },
});
