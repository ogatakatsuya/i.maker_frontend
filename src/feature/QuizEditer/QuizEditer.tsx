import {
	Box,
	Button,
	Heading,
	NativeTable,
	TableCaption,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getGroupsByQuizSetId, getQuizSet } from "../../client/services.gen";
import type {
	GetGroupsByQuizSetIdResponse,
	GetQuizSetResponse,
} from "../../client/types.gen";

const QuizEditor = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	const [quizSet, setQuizSet] = useState<GetQuizSetResponse | null>(null);
	const [groups, setGroups] = useState<GetGroupsByQuizSetIdResponse | null>(
		null,
	);
	const navigater = useNavigate();

	useEffect(() => {
		const fetchQuizData = async () => {
			if (quiz_set_id) {
				const response = await getQuizSet({
					path: {
						quiz_set_id: Number(quiz_set_id),
					},
				});
				if (response.status === 200 && response.data) {
					setQuizSet(response.data);
				} else {
					console.log("error");
				}
			}
		};
		const fetchGroupData = async () => {
			if (quiz_set_id) {
				const groupResponse = await getGroupsByQuizSetId({
					path: {
						quiz_set_id: Number(quiz_set_id),
					},
				});
				if (groupResponse.status === 200 && groupResponse.data) {
					setGroups(groupResponse.data);
				}
			}
		};
		fetchQuizData();
		fetchGroupData();
	}, [quiz_set_id]);

	return (
		<Box p={6}>
			<Heading as="h2" size="xl" mb={6} textAlign="center">
				編集画面
			</Heading>
			<Heading size="md" mb={4}>
				問題の詳細情報
			</Heading>
			{quizSet ? (
				<>
					<Box mb={6}>
						<Text>タイトル : {quizSet.title}</Text>
					</Box>

					<Box mb={6}>
						<Text>説明 : {quizSet.description}</Text>
					</Box>

					<Box mb={6}>
						{quizSet.questions.length > 0 ? (
							<TableContainer maxWidth="800px" overflowX="auto" mx="auto">
								<NativeTable variant="striped">
									<TableCaption>問題セットの詳細</TableCaption>
									<Thead>
										<Tr>
											<Th>問題番号</Th>
											<Th>内容</Th>
											<Th>ヒント</Th>
											<Th>解答</Th>
										</Tr>
									</Thead>
									<Tbody>
										{quizSet.questions.map((question, index) => (
											<Tr key={question.id}>
												<Td>{index + 1}</Td>
												<Td>{question.content}</Td>
												<Td>{question.hint}</Td>
												<Td>
													{question.answers.length > 0 ? (
														<ul>
															{question.answers.map((answer, answerIndex) => (
																<li key={answer.id}>
																	{answerIndex + 1}. {answer.content}
																</li>
															))}
														</ul>
													) : (
														<Text>回答がありません。</Text>
													)}
												</Td>
											</Tr>
										))}
									</Tbody>
								</NativeTable>
							</TableContainer>
						) : (
							<Text>問題がありません。</Text>
						)}
					</Box>
				</>
			) : (
				<Text>データを取得中...</Text>
			)}
			<Button
				onClick={() =>
					navigater(`/admin/i.maker/e53f4181/create/${quiz_set_id}`)
				}
				colorScheme="teal"
				mb={6}
			>
				問題を追加する
			</Button>
			<Box mb={6}>
				<Heading size="md" mb={4}>
					参加したグループ情報
				</Heading>
				{groups && groups.groups.length > 0 ? (
					<TableContainer maxWidth="800px" overflowX="auto" mx="auto">
						<NativeTable variant="striped">
							<TableCaption>グループの詳細</TableCaption>
							<Thead>
								<Tr>
									<Th>グループ名</Th>
									<Th>メンバー数</Th>
									<Th>スコア</Th>
									<Th>プレイ日時</Th>
								</Tr>
							</Thead>
							<Tbody>
								{groups.groups.map((group) => (
									<Tr key={group.id}>
										<Td>{group.name}</Td>
										<Td>{group.member_num}</Td>
										<Td>{group.score !== null ? group.score : "未プレイ"}</Td>
										<Td>{new Date(group.played_at).toLocaleString()}</Td>
									</Tr>
								))}
							</Tbody>
						</NativeTable>
					</TableContainer>
				) : (
					<Text>グループ情報がありません。</Text>
				)}
			</Box>
		</Box>
	);
};

export default QuizEditor;
