import { z } from "zod";

const RANGE = { min: 1, max: 3 } as const;

export const registerFormSchema = z.object({
	name: z.string().nonempty({
		message: "ニックネームは必須です",
	}),
	memberNum: z
		.number({ message: "数値で入力してください" })
		.int({ message: "整数で入力してください" })
		.min(RANGE.min, { message: `${RANGE.min}以上を入力してください` })
		.max(RANGE.max, { message: `${RANGE.max}以下を入力してください` }),
});

export type RegisterFormSchemaType = z.infer<typeof registerFormSchema>;
