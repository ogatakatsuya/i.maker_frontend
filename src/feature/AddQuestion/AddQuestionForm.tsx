import {
	Box,
	Button,
	FormControl,
	Heading,
	List,
	ListItem,
	Text,
	Textarea,
	VStack,
} from "@yamada-ui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addQuestion } from "../../client/services.gen";
import type { AddQuestionData } from "../../client/types.gen";

export type AddQuestionRequest = {
	content: string;
	hint: string;
	answers: string;
};

const AddQuestionForm = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	const navigater = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AddQuestionRequest>();

	const onSubmit = async (data: AddQuestionRequest) => {
		const splitAnswers = data.answers.split(",");
		if (quiz_set_id) {
			const addQuestionData: AddQuestionData = {
				body: {
					...data,
					answers: splitAnswers,
				},
				path: {
					quiz_set_id: Number(quiz_set_id),
				},
			};
			try {
				const response = await addQuestion(addQuestionData);
				if (response.status === 200) {
					toast.success("問題が追加されました。");
					navigater(`/admin/i.maker/e53f4181/${quiz_set_id}`);
				} else {
					toast.error("問題の追加に失敗しました。");
				}
			} catch (error) {
				console.error(error);
				toast.error("エラーが発生しました。");
			}
		}
	};

	return (
		<Box p={6}>
			<Heading>問題を追加する</Heading>
			<Box p={6}>
				<Text as="b">注意事項</Text>
			</Box>
			<List>
				<ListItem>一度作成した問題・解答は削除できません。</ListItem>
				<ListItem>最終問題のヒントは必ず空欄にしてください。</ListItem>
				<ListItem>解答はカンマ(,)区切りで入力してください。</ListItem>
				<ListItem>
					問題の順序は作成した順序になります。（最終問題は必ず4つ目に作成してください。）
				</ListItem>
				<ListItem>
					問題内容は表示されないので、適当で良いです。識別できるようにわかりやすい名前をつけてください。
				</ListItem>
				<ListItem>
					問題は4つ以上作れてしまいますが、絶対に4つ以上の問題を追加しないでください。
				</ListItem>
			</List>
			<VStack
				as="form"
				p={6}
				onSubmit={handleSubmit(onSubmit)}
				maxWidth="800px"
				mx="auto"
			>
				<FormControl label="問題の内容" isInvalid={!!errors.content}>
					<Textarea
						placeholder="問題の内容を入力してください。"
						{...register("content", { required: "内容は必須です。" })}
					/>
				</FormControl>
				<Text color="red.500">{errors.content?.message}</Text>

				<FormControl label="ヒント" isInvalid={!!errors.hint}>
					<Textarea
						placeholder="ヒントを入力してください。"
						{...register("hint")}
					/>
				</FormControl>
				<Text color="red.500">{errors.hint?.message}</Text>

				<FormControl label="解答" isInvalid={!!errors.answers}>
					<Textarea
						placeholder="解答をカンマ区切りで入力してください。"
						{...register("answers", {
							required: "解答は必須です。",
						})}
					/>
				</FormControl>
				<Text color="red.500">{errors.answers?.message}</Text>

				<Button type="submit" colorScheme="teal" mt={4}>
					問題を追加
				</Button>
			</VStack>
		</Box>
	);
};

export default AddQuestionForm;
