import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Answers } from "../../../client/types.gen";
import {
	type QuestionFormSchemaType,
	questionFormSchema,
} from "../schema/formSchema";

const useAnswerForm = (
	answer: Array<Answers>,
	setQuestionIndex: (arg0: (prev: number) => number) => void,
	setIsCorrect: (arg0: boolean) => void,
	setIsIncorrect: (arg0: boolean) => void,
) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<QuestionFormSchemaType>({
		resolver: zodResolver(questionFormSchema),
	});

	const onSubmit = (data: QuestionFormSchemaType) => {
		const isAnswerCorrect = answer.some(
			(value) => value.content === data.answer,
		);
		if (isAnswerCorrect) {
			setIsCorrect(true);
			setTimeout(() => {
				setIsCorrect(false);
			}, 1000);
			reset();
			setQuestionIndex((prev) => prev + 1);
		} else {
			setIsIncorrect(true);
			setTimeout(() => {
				setIsIncorrect(false);
			}, 1000);
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};

export default useAnswerForm;
