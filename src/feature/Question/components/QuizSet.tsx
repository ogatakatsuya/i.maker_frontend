import { Box, Heading, Text } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getQuizSetBySubId } from "../../../client/services.gen";
import type { GetQuizSetResponse } from "../../../client/types.gen";
import { TimePerQuizSet } from "../../../lib/constants";
import useQuizSetCount from "../hook/useQuizSetCount";
import Question from "./Question";

const QuizSet = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	const [quizSet, setQuizSet] = useState<GetQuizSetResponse | null>(null);
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [timeLimit, setTimeLimit] = useState(TimePerQuizSet);
	const navigate = useNavigate();
	useQuizSetCount(timeLimit, setTimeLimit, quiz_set_id);

	useEffect(() => {
		const fetchQuizSet = async () => {
			if (quiz_set_id) {
				const response = await getQuizSetBySubId({
					path: { sub_id: quiz_set_id },
				});
				if (response.data) {
					setQuizSet(response.data);
				}
			}
		};
		fetchQuizSet();
	}, [quiz_set_id]);

	useEffect(() => {
		if (quizSet && questionIndex > quizSet.questions.length - 1) {
			navigate(`/result/${quiz_set_id}`);
		}
	}, [questionIndex, quizSet, quiz_set_id, navigate]);

	const currentQuestion = quizSet?.questions[questionIndex];

	return (
		<Box>
			<Heading>Quiz Set</Heading>
			<Text>Time Limit: {timeLimit}</Text>
			{currentQuestion && (
				<Question
					questionIndex={questionIndex}
					setQuestionIndex={setQuestionIndex}
					question={currentQuestion}
				/>
			)}
		</Box>
	);
};

export default QuizSet;
