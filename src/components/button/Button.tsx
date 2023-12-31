import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../assets/styles/theme/theme";

interface Props {
  label: string;
  onPress: () => void;
}
export function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[
        label === "Try again!"
          ? styles.buttonWrapperDanger
          : styles.buttonWrapper,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  buttonWrapper: {
    backgroundColor: theme.colors.primary.light,
    elevation: 10,
    borderRadius: 30,
    margin: 5,
  },
  buttonWrapperDanger: {
    backgroundColor: theme.colors.danger.main,
    elevation: 10,
    borderRadius: 30,
    margin: 5,
  },

  alternativeText: {
    textAlign: "center",
    color: theme.colors.primary.main,
    fontSize: 16,
  },
});
