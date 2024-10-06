import { z } from "zod";

const sampleFormSchema = z.object({
	name: z.string().nonempty({
		message: "ニックネームは必須です",
	}),
	memberNum: z.enum(["1", "2", "3"], {
		message: "チームメンバーの数は1~3の間で選択してください",
	}),
});

export default sampleFormSchema;
