import {
	Button,
	ErrorMessage,
	FormControl,
	Input,
	VStack,
} from "@yamada-ui/react";
import type { Answers } from "../../../client/types.gen";
import useAnswerForm from "../hook/useAnswerForm";

const AnswerForm = ({
	answer,
	setQuestionIndex,
	setIsCorrect,
	setIsIncorrect,
	setMissingNum,
}: {
	answer: Array<Answers>;
	setQuestionIndex: (arg0: (prev: number) => number) => void;
	setIsCorrect: (arg0: boolean) => void;
	setIsIncorrect: (arg: boolean) => void;
	setMissingNum: (arg: (prev: number) => number) => void;
}) => {
	const { register, onSubmit, errors } = useAnswerForm(
		answer,
		setQuestionIndex,
		setIsCorrect,
		setIsIncorrect,
		setMissingNum,
	);
	return (
		<VStack as="form" onSubmit={onSubmit}>
			<FormControl isInvalid={!!errors.answer}>
				<Input
					id="answer"
					{...register("answer")}
					placeholder="ここに解答を入力してください"
				/>
				<ErrorMessage>{errors.answer?.message}</ErrorMessage>
			</FormControl>
			<Button type="submit" size="sm">
				解答
			</Button>
		</VStack>
	);
};

export default AnswerForm;
