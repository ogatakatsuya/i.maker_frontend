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
			reset();
			setQuestionIndex((prev) => prev + 1);
		} else {
			console.log("Incorrect answer");
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};

export default useAnswerForm;
