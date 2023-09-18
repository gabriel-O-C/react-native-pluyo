import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "./src/assets/styles/theme/theme";
import useQuestions from "./src/hooks/useQuestions";

export default function App() {
  const { questions } = useQuestions();
  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View>
          <Text style={styles.text}>Fill in the missing word.</Text>
          {questions.map((question) => (
            <>
              <Text key={question.title} style={styles.question}>
                {question.question}
              </Text>
              {question.alternatives.map((alternative: string) => (
              <TouchableOpacity style={styles.alternativeWrapper}>
                <Text style={styles.alternativeText}>{alternative}</Text>
              </TouchableOpacity>

              ))}
            </>
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
  },
  question: {
    color: "#fff",
    fontSize: 28,
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
