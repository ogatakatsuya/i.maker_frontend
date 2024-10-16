import { Box, Container, Text } from "@yamada-ui/react";
import { useState } from "react";
import type { Questions } from "../../../client/types.gen";
import { TimeToDisplayHint } from "../../../lib/constants";
import useQuestionCount from "../hook/useQuestionCount";
import AnswerForm from "./AnswerForm";
import FinalAnswerForm from "./FinalAnswerForm";

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
	const [timeLimit, setTimeLimit] = useState(0);
	useQuestionCount(timeLimit, setTimeLimit, questionIndex);

	return (
		<Container>
			<Box>
				{question.hint ? (
					<Text fontSize="2xl" textAlign="left" p={2}>
						第{questionIndex + 1}問
					</Text>
				) : (
					<Text fontSize="2xl" textAlign="center" p={2}>
						最終問題
					</Text>
				)}
				<p>{question.content}</p>
				{questionIndex + 1 !== 5 ? (
					<AnswerForm
						answer={question.answers}
						setQuestionIndex={setQuestionIndex}
					/>
				) : (
					<FinalAnswerForm
						answer={question.answers}
						setQuestionIndex={setQuestionIndex}
					/>
				)}
				{question.hint &&
					(timeLimit >= TimeToDisplayHint ? (
						<Box>
							<Text>ヒント：{question.hint}</Text>
						</Box>
					) : (
						<Box>
							<Text>
								ヒントは{TimeToDisplayHint - timeLimit}秒後に表示されます
							</Text>
						</Box>
					))}
			</Box>
		</Container>
	);
};

export default Question;
