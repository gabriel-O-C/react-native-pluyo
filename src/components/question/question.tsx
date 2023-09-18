import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../assets/styles/theme/theme";
import { Iquestion } from "../../types/question";

export function Question({alternatives, answer, question, title}: Iquestion) {
  return (
    <>
    <Text key={title} style={styles.question}>
      {question}
    </Text>
    {alternatives.map((alternative: string) => (
    <TouchableOpacity style={styles.alternativeWrapper}>
      <Text style={styles.alternativeText}>{alternative}</Text>
    </TouchableOpacity>

    ))}
  </>
  )
}

const styles = StyleSheet.create({
  question: {
    color: "#fff",
    fontSize: 24,
    textAlign: 'center',

  },
  alternativeWrapper: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 30,
    margin: 5,
  },
  alternativeText: {
    textAlign: 'center',
    color: theme.colors.primary.main,
    fontSize: 16
  }
});