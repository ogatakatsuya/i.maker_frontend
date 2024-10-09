import {
	Box,
	DecimalList,
	Divider,
	Grid,
	GridItem,
	Heading,
	ListItem,
	Text,
	VStack,
} from "@yamada-ui/react";
import { Icon } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getQuizSet } from "../../../client/services.gen";
import type { GetQuizSetResponse } from "../../../client/types.gen";
import CustomButton from "./CustomButton";

const Quiz = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	const [quizSet, setQuizSet] = useState<GetQuizSetResponse | null>(null);
	const navigation = useNavigate();
	const warningList = [
		"テストは静かな場所で受けてください。",
		"他の人の答案を見ないでください。",
		"時間を守り、途中退出はできません。",
		"試験用紙は丁寧に扱ってください。",
		"不明な点があれば、試験監督に質問してください。",
	];

	useEffect(() => {
		const fetchQuizSet = async () => {
			if (quiz_set_id) {
				const response = await getQuizSet({
					path: { quiz_set_id: Number.parseInt(quiz_set_id) },
				});
				if (response.data) {
					setQuizSet(response.data);
				}
			}
		};
		fetchQuizSet();
	}, [quiz_set_id]);

	return (
		<Box w="full" minHeight="100vh">
			<VStack>
				<Box bg="gray.700" textAlign="left">
					<Text my={1} ml={2} color="white">
						{quizSet?.title}
					</Text>
				</Box>
				<Box textAlign="left" pl={4}>
					<Heading pb={4}>詳細＆情報</Heading>
					<Divider />
					<Grid
						w="full"
						templateColumns="repeat(10, 1fr)"
						templateRows="repeat(2,1fr)"
					>
						<GridItem colSpan={1} rowSpan={2} pt={1} px={2}>
							<Icon as={SlCalender} w={9} h={9} />
						</GridItem>
						<GridItem colSpan={8}>
							<Text as="b">アセスメントの期限</Text>
						</GridItem>
						<GridItem colStart={2} colEnd={10} rowStart={2} rowEnd={2}>
							<Text>テスト開始より10分</Text>
						</GridItem>
					</Grid>
					<Divider />
					<Grid
						w="full"
						templateColumns="repeat(10, 1fr)"
						templateRows="repeat(2,1fr)"
					>
						<GridItem colSpan={1} rowSpan={2} pt={1} px={2}>
							<Icon as={IoMdCheckboxOutline} w={9} h={9} />
						</GridItem>
						<GridItem colSpan={8}>
							<Text as="b">答案</Text>
						</GridItem>
						<GridItem colStart={2} colEnd={10} rowStart={2} rowEnd={2}>
							<Text as="b">未提出</Text>
						</GridItem>
					</Grid>
					<Divider />
					<Heading py={4}>注意事項</Heading>
					<DecimalList>
						{warningList.map((warning, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<ListItem key={index}>
								<Text>{warning}</Text>
							</ListItem>
						))}
					</DecimalList>
				</Box>
				<Box p={5}>
					<CustomButton
						onClick={() => {
							navigation(`/question/${quiz_set_id}`);
						}}
					>
						答案1を開始
					</CustomButton>
					<Text fontSize="sm" color="red.500" pt={1}>
						合図があるまでこのボタンは押さないでください
					</Text>
				</Box>
			</VStack>
		</Box>
	);
};

export default Quiz;
