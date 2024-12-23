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
	setIsCorrect: (arg0: boolean) => void;
	setIsIncorrect: (arg0: boolean) => void;
	setMissingNum: (arg: (prev: number) => number) => void;
	setHintNum: (arg: (prev: number) => number) => void;
};

const Question = ({
	questionIndex,
	setQuestionIndex,
	question,
	setIsCorrect,
	setIsIncorrect,
	setMissingNum,
	setHintNum,
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
							setIsCorrect={setIsCorrect}
							setIsIncorrect={setIsIncorrect}
							setMissingNum={setMissingNum}
						/>
						<Hint
							hint={question.hint}
							questionIndex={questionIndex}
							time={time}
							setHintNum={setHintNum}
						/>
					</Box>
				) : (
					<FinalAnswerForm
						answer={question.answers}
						setQuestionIndex={setQuestionIndex}
						setIsCorrect={setIsCorrect}
						setIsIncorrect={setIsIncorrect}
					/>
				)}
			</Box>
		</Container>
	);
};

export default Question;
