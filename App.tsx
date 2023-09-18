import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useQuestions from "./src/hooks/useQuestions";

export default function App() {
  const { questions } = useQuestions();
  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View>
          <Text>Fill in the missing word.</Text>
          {questions.map((question) => (
            <Text key={question.title}>{question.question}</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
