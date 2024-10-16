import { Box, Divider, Heading, Text, VStack } from "@yamada-ui/react";
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
		<VStack>
			<Box
				bg="gray.600"
				textAlign="center"
				height="40px"
				display="flex"
				alignItems="center"
				justifyContent="center"
				fontSize="xl"
			>
				<Text color="white" as="b">
					期末試験 再試
				</Text>
			</Box>
			<Box px={5}>
				<Heading p={3} as="h1" size="lg" textAlign="left">
					{quizSet?.title} 期末追加試験
				</Heading>
				<Divider />
				<Box textAlign="left" p={3}>
					<Text as="b">課題コンテンツ</Text>
					<Text fontSize="sm">
						配った問題の解答を記入してください。他チームとの協働は厳禁です。発見次第報告させていただいます。
					</Text>
				</Box>
				<Divider />
				{currentQuestion && (
					<Question
						questionIndex={questionIndex}
						setQuestionIndex={setQuestionIndex}
						question={currentQuestion}
					/>
				)}
			</Box>
		</VStack>
	);
};

export default QuizSet;
