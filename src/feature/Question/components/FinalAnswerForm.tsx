import {
	Button,
	ErrorMessage,
	FormControl,
	Input,
	VStack,
} from "@yamada-ui/react";
import type { Answers } from "../../../client/types.gen";
import useFinalAnswer from "../hook/useFainalAnswer";

const FinalAnswerForm = ({
	answer,
	setQuestionIndex,
	setIsCorrect,
	setIsIncorrect,
}: {
	answer: Array<Answers>;
	setQuestionIndex: (arg0: (prev: number) => number) => void;
	setIsCorrect: (arg: boolean) => void;
	setIsIncorrect: (arg: boolean) => void;
}) => {
	const { register, onSubmit, errors } = useFinalAnswer(
		answer,
		setQuestionIndex,
		setIsCorrect,
		setIsIncorrect,
	);
	return (
		<VStack as="form" onSubmit={onSubmit}>
			<FormControl isInvalid={!!errors.answer1}>
				<Input
					id="answer1"
					{...register("answer1")}
					placeholder="ここに解答を入力してください"
				/>
				<ErrorMessage>{errors.answer1?.message}</ErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.answer2}>
				<Input
					id="answer2"
					{...register("answer2")}
					placeholder="ここに解答を入力してください"
				/>
				<ErrorMessage>{errors.answer2?.message}</ErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.answer3}>
				<Input
					id="answer3"
					{...register("answer3")}
					placeholder="ここに解答を入力してください"
				/>
				<ErrorMessage>{errors.answer3?.message}</ErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.answer4}>
				<Input
					id="answer4"
					{...register("answer4")}
					placeholder="ここに解答を入力してください"
				/>
				<ErrorMessage>{errors.answer4?.message}</ErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.answer5}>
				<Input
					id="answer5"
					{...register("answer5")}
					placeholder="ここに解答を入力してください"
				/>
				<ErrorMessage>{errors.answer5?.message}</ErrorMessage>
			</FormControl>
			<Button type="submit" size="sm">
				解答
			</Button>
		</VStack>
	);
};

export default FinalAnswerForm;
