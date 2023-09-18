import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import theme from "./src/assets/styles/theme/theme";
import { Question } from "./src/components/question/question";
import useQuestions from "./src/hooks/useQuestions";

export default function App() {
  const { questions } = useQuestions();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {questions.length > 0 ? (
        <>
          <Text style={styles.text}>Fill in the missing word.</Text>

          <FlatList
            data={questions}
            style={{ width: "80%", height: "90%" }}
            keyExtractor={(item) => item.answer + item.question}
            renderItem={({ item }) => (
              <View style={styles.questionWrapper}>
                <Question
                  alternatives={item.alternatives}
                  answer={item.answer}
                  question={item.question}
                  title={item.title}
                  key={Math.random().toString(36).substring(2, 9)}
                />
              </View>
            )}
          ></FlatList>
        </>
      ) : (
        <Text>No questions</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.main,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  questionWrapper: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: "20%",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 28,
    marginTop: 60,
  },
});
