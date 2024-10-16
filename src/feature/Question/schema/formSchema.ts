import { z } from "zod";

export const questionFormSchema = z.object({
	answer: z.string().min(1, { message: "解答は必須です" }),
});

export const finalQuestionFormSchema = z.object({
	answer1: z.string().min(1, { message: "解答1は必須です" }),
	answer2: z.string().min(1, { message: "解答2は必須です" }),
	answer3: z.string().min(1, { message: "解答3は必須です" }),
	answer4: z.string().min(1, { message: "解答4は必須です" }),
	answer5: z.string().min(1, { message: "解答5は必須です" }),
});

export type QuestionFormSchemaType = z.infer<typeof questionFormSchema>;
export type FinalQuestionFormSchemaType = z.infer<
	typeof finalQuestionFormSchema
>;
