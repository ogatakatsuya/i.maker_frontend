import { Box, Container, Text } from "@yamada-ui/react";
import { useState } from "react";
import type { Questions } from "../../../client/types.gen";
import useQuestionCount from "../hook/useQuestionCount";
import AnswerForm from "./AnswerForm";
import FinalAnswerForm from "./FinalAnswerForm";
import Hint from "./Hint";

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
	const [time, setTime] = useState(0);
	useQuestionCount(time, setTime, questionIndex);

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
				{question.hint ? (
					<Box>
						<AnswerForm
							answer={question.answers}
							setQuestionIndex={setQuestionIndex}
						/>
						<Hint
							hint={question.hint}
							questionIndex={questionIndex}
							time={time}
						/>
					</Box>
				) : (
					<FinalAnswerForm
						answer={question.answers}
						setQuestionIndex={setQuestionIndex}
					/>
				)}
			</Box>
		</Container>
	);
};

export default Question;
