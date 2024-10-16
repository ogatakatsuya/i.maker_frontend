import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { Answers } from "../../../client/types.gen";
import {
	type FinalQuestionFormSchemaType,
	finalQuestionFormSchema,
} from "../schema/formSchema";

const useAnswerForm = (
	answer: Array<Answers>,
	setQuestionIndex: (arg0: (prev: number) => number) => void,
) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FinalQuestionFormSchemaType>({
		resolver: zodResolver(finalQuestionFormSchema),
	});

	const onSubmit = (data: FinalQuestionFormSchemaType) => {
		const submittedAnswers = [
			data.answer1,
			data.answer2,
			data.answer3,
			data.answer4,
			data.answer5,
		];

		const remainingAnswers = [...answer];

		const missingAnswers = submittedAnswers.filter((submittedAnswer) => {
			const index = remainingAnswers.findIndex(
				(answer) => answer.content === submittedAnswer,
			);
			if (index === -1) {
				return true;
			}
			remainingAnswers.splice(index, 1);
			return false;
		});

		if (missingAnswers.length > 0) {
			console.log("Missing answers:", missingAnswers);
		} else {
			setQuestionIndex((prev) => prev + 1);
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};

export default useAnswerForm;
