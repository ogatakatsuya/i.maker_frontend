import { Box, Divider, Heading, Image, Text, VStack } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import correctImage from "../../assets/correct.png";
import incorrectImage from "../../assets/incorrect.png";
import { getQuizSetBySubId, registerScore } from "../../client/services.gen";
import type { GetQuizSetResponse } from "../../client/types.gen";
import { TimePerQuizSet } from "../../lib/constants";
import Question from "./components/Question";
import useQuizSetCount from "./hook/useQuizSetCount";

const QuizSet = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	const [quizSet, setQuizSet] = useState<GetQuizSetResponse | null>(null);
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [timeLimit, setTimeLimit] = useState(TimePerQuizSet);
	const [isCorrect, setIsCorrect] = useState(false);
	const [isIncorrect, setIsIncorrect] = useState(false);
	const [missingNum, setMissingNum] = useState<number>(0);
	const [hintNum, setHintNum] = useState<number>(0);
	const navigate = useNavigate();
	useQuizSetCount(
		timeLimit,
		setTimeLimit,
		quiz_set_id,
		questionIndex,
		missingNum,
		hintNum,
	);

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
		const questionHandler = async () => {
			if (quizSet && questionIndex > quizSet.questions.length - 1) {
				const groupId = sessionStorage.getItem("groupId");
				if (groupId) {
					const isTimeOver = timeLimit < 60;
					const response = await registerScore({
						body: {
							correct_num: questionIndex,
							incorrect_answers_num: missingNum,
							showed_hint_num: hintNum,
							is_time_over: isTimeOver,
						},
						path: { group_id: Number(groupId) },
					});
					if (response.data?.message) {
						navigate(`/result/${quiz_set_id}`);
					}
				} else {
					console.error("Group ID not found in session storage");
				}
			}
		};
		questionHandler();
	}, [
		questionIndex,
		quizSet,
		quiz_set_id,
		navigate,
		timeLimit,
		missingNum,
		hintNum,
	]);

	const currentQuestion = quizSet?.questions[questionIndex];

	return (
		<>
			<Box>
				{isCorrect && (
					<Image
						src={correctImage}
						fallback="https://via.placeholder.com/512"
						fallbackStrategy="onError"
						maxWidth="100%"
						height="auto"
						objectFit="contain"
						className="logo"
						position="absolute"
						transform="translate(-50%, -5%)"
						zIndex={2}
					/>
				)}
				{isIncorrect && (
					<Image
						src={incorrectImage}
						fallback="https://via.placeholder.com/512"
						fallbackStrategy="onError"
						maxWidth="100%"
						height="auto"
						objectFit="contain"
						className="logo"
						position="absolute"
						transform="translate(-50%, -5%)"
						zIndex={2}
					/>
				)}

				<VStack position="relative" zIndex={1}>
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
							{questionIndex === 3 ? "謎解き概論l" : "謎解き概論I"} 期末追加試験
						</Heading>
						<Divider />
						<Box textAlign="left" p={3}>
							<Text as="b">課題コンテンツ</Text>
							<Text fontSize="sm">
								配った問題の解答を記入してください。他チームとの協働は厳禁です。発見次第報告させていただきます。
							</Text>
						</Box>
						<Divider />
						{currentQuestion && (
							<Question
								questionIndex={questionIndex}
								setQuestionIndex={setQuestionIndex}
								question={currentQuestion}
								setIsCorrect={setIsCorrect}
								setIsIncorrect={setIsIncorrect}
								setMissingNum={setMissingNum}
								setHintNum={setHintNum}
							/>
						)}
					</Box>
				</VStack>
			</Box>
		</>
	);
};

export default QuizSet;
