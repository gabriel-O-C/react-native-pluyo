import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../assets/styles/theme/theme";
import { Iquestion } from "../../types/question";
import { Button } from "../button/Button";

export function Question({ alternatives, answer, question, title }: Iquestion) {
  const [label, setLabel] = useState("Check answer");
  function handleIsCorrect(alternative: string) {
    if (alternative === answer) {
      setLabel("Continue!");
    } else {
      setLabel("Try again!");
    }
  }

  return (
    <>
      <Text style={styles.question}>{question}</Text>
      {alternatives.map((alternative: string) => (
        <TouchableOpacity
          style={styles.alternativeWrapper}
          onPress={() => handleIsCorrect(alternative)}
          key={Math.random().toString(36).substring(2, 9)}
        >
          <Text style={styles.alternativeText}>{alternative}</Text>
        </TouchableOpacity>
      ))}
      <Button
        label={label}
        onPress={() => {}}
        key={Math.random().toString(36).substring(2, 9)}
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
