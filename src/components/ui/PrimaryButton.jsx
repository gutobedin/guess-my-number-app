import { Text, Pressable, View, StyleSheet } from "react-native";
import Colors from "../../../constants/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#3105e0" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: Colors.primary300,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: Colors.gray,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
