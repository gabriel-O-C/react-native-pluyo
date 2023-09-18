import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../assets/styles/theme/theme";
import { Iquestion } from "../../types/question";
import { Button } from "../button/Button";

export function Question({ alternatives, answer, question, title }: Iquestion) {
  function handleIsCorrect(alternative: string) {
    if (alternative === answer) {
      console.log("correct!");
    }
    console.log("incorrect!");
  }

  return (
    <>
      <Text key={title} style={styles.question}>
        {question}
      </Text>
      {alternatives.map((alternative: string) => (
        <TouchableOpacity
          style={styles.alternativeWrapper}
          onPress={() => handleIsCorrect(alternative)}
        >
          <Text style={styles.alternativeText}>{alternative}</Text>
        </TouchableOpacity>
      ))}
      <Button
      label="check answer"
      onPress={() => {}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  question: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
  },
  alternativeWrapper: {
    backgroundColor: "#fff",
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
