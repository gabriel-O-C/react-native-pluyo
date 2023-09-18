import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { Question } from "../../types/question";

class QuestionsService {
  async listQuestions(): Promise<Question[]> {
    const questions: Question[] = [];
    const querySnapshot = await getDocs(collection(db, "questions"));
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      let question: Question = data.questions
        .flatMap((item: Question) => item)
      questions.push(question);
    });
    return questions.flat(2)
    }
}

export default new QuestionsService();