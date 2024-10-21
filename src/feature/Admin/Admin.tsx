import {
	Box,
	Button,
	ErrorMessage,
	FormControl,
	Heading,
	Input,
	Link,
	List,
	ListItem,
	Text,
	Textarea,
	VStack,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getQuizSets } from "../../client/services.gen";
import { createQuizSet, deleteQuizSet } from "../../client/services.gen";
import type { GetQuizSetsResponse } from "../../client/types.gen";

type quizSetInputType = {
	title: string;
	description: string;
};

const Admin = () => {
	const [quizSets, setQuizSets] = useState<GetQuizSetsResponse["quiz_sets"]>(
		[],
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<quizSetInputType>();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getQuizSets();
			if (response.data?.quiz_sets) {
				setQuizSets(response.data.quiz_sets);
			}
		};
		fetchData();
	}, []);

	const onSubmit = async (data: quizSetInputType) => {
		await createQuizSet({
			body: {
				title: data.title,
				description: data.description,
			},
		});
	};

	const handleDelete = async (quiz_set_id: number) => {
		const response = await deleteQuizSet({
			path: {
				quiz_set_id: quiz_set_id,
			},
		});

		if (response.status === 200) {
			setQuizSets((prevQuizSets) =>
				prevQuizSets.filter((quizSet) => quizSet.id !== quiz_set_id),
			);
		}
	};

	return (
		<Box maxW="800px" mx="auto" p={4}>
			<Heading as="h2" size="xl" mb={6} textAlign="center">
				問題セット一覧
			</Heading>
			<VStack>
				<List w="100%">
					{quizSets.map((quizSet) => (
						<ListItem key={quizSet.id} p={4} borderWidth={1} borderRadius="md">
							<Heading as="h2" size="md" mb={2}>
								<Link href={`/admin/i.maker/e53f4181/${quizSet.id}`}>
									{quizSet.title}
								</Link>
							</Heading>
							<Text>{quizSet.description}</Text>
							<Box p={4}>
								<Button
									onClick={() => handleDelete(quizSet.id)}
									bg="red.500"
									color="white"
								>
									削除
								</Button>
							</Box>
						</ListItem>
					))}
				</List>
			</VStack>
			<Heading as="h2" size="xl" mt={6} textAlign="center">
				問題セットを追加する
			</Heading>
			<VStack p={6} as="form" onSubmit={handleSubmit(onSubmit)}>
				<FormControl label="タイトル" isInvalid={!!errors.title}>
					<Input
						placeholder="問題セットのタイトルを入力してください。"
						{...register("title", {
							required: { value: true, message: "タイトルは必須です。" },
						})}
					/>
					{errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
				</FormControl>

				<FormControl label="説明文" isInvalid={!!errors.description}>
					<Textarea
						placeholder="問題セットの説明文を入力してください"
						{...register("description", {
							required: { value: true, message: "説明文は必須です。" },
						})}
					/>
					{errors.description && (
						<ErrorMessage>{errors.description.message}</ErrorMessage>
					)}
				</FormControl>

				<Button type="submit">追加</Button>
			</VStack>
		</Box>
	);
};

export default Admin;
