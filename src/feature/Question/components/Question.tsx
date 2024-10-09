import { Box, Container, Heading, Text } from "@yamada-ui/react";
import { useState } from "react";
import type { Questions } from "../../../client/types.gen";
import { TimePerQuestion, TimeToDisplayHint } from "../../../lib/constants";
import useQuestionCount from "../hook/useQuestionCount";

type QuestionProps = {
	questionIndex: number;
	setQuestionIndex: (arg0: (prev: number) => number) => void;
	question: Questions;
};

const Question = ({
	questionIndex,
	setQuestionIndex,
	question,
}: QuestionProps) => {
	const [timeLimit, setTimeLimit] = useState(TimePerQuestion);
	useQuestionCount(timeLimit, setTimeLimit, setQuestionIndex, TimePerQuestion);

	return (
		<Box>
			<Heading>Question</Heading>
			<Text>Time Limit: {timeLimit}</Text>
			{question.hint ? (
				<Text>問題{questionIndex + 1}</Text>
			) : (
				<Text>最終問題</Text>
			)}
			<Text>{question.content}</Text>
			{question.hint &&
				(timeLimit <= TimeToDisplayHint ? (
					<Container>
						<Text>ヒント：{question.hint}</Text>
					</Container>
				) : (
					<Container>
						<Text>
							ヒントは{timeLimit - TimeToDisplayHint}秒後に表示されます
						</Text>
					</Container>
				))}
		</Box>
	);
};

export default Question;
