import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "./src/assets/styles/theme/theme";
import { Question } from "./src/components/question/question";
import useQuestions from "./src/hooks/useQuestions";

export default function App() {
  const { questions } = useQuestions();
  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View>
          <Text style={styles.text}>Fill in the missing word.</Text>
          {questions.map((question) => (
            <Question alternatives={question.alternatives} answer={question.answer} question={question.question} title={question.title} key={question.title}   />
          ))}
          <TouchableOpacity>
            <Text>Check answer</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>No questions</Text>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.main,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    textAlign: 'center',
    fontSize: 28
  },
});
