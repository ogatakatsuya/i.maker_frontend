import { Box, Container, Text } from "@yamada-ui/react";
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
		<Container>
			<Text>Time Limit: {timeLimit}</Text>
			<Box>
				{question.hint ? (
					<Text fontSize="2xl" textAlign="left">
						第{questionIndex + 1}問
					</Text>
				) : (
					<Text>最終問題</Text>
				)}
				{question.hint &&
					(timeLimit <= TimeToDisplayHint ? (
						<Box>
							<Text>ヒント：{question.hint}</Text>
						</Box>
					) : (
						<Box>
							<Text>
								ヒントは{timeLimit - TimeToDisplayHint}秒後に表示されます
							</Text>
						</Box>
					))}
			</Box>
		</Container>
	);
};

export default Question;
