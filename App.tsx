import { StatusBar } from "expo-status-bar";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { db } from "./firebaseConfig";

interface Question {
  answer: string;
  title: string;
  alternatives: string[];
  question: string;
}

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "questions"));
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        const arr = [];
        let question: Question = data.questions
          .flatMap((item: Question) => item)
          .flat(2);
        arr.push(question);

        setQuestions(arr.flat(2));
      });
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View>
          <Text>Fill in the missing word.</Text>
          {questions.map((question) => (
            <Text key={question.title}>
              {question.title}
            </Text>
          ))}
          <TouchableOpacity>
            <Text>Check answer</Text>
          </TouchableOpacity>
        </View>
      ): <Text>No questions</Text>}
      
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
