import {
	Avatar,
	Box,
	Divider,
	HStack,
	Icon,
	Text,
	VStack,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { getScore } from "../../client/services.gen";
import { FeedBack, type FeedBackEntry } from "../../lib/constants";

const Result = () => {
	const [score, setScore] = useState<number>(0);
	const [feedback, setFeedback] = useState<FeedBackEntry>();
	useEffect(() => {
		const fetchScore = async () => {
			const groupId = sessionStorage.getItem("groupId");
			if (groupId != null) {
				const response = await getScore({
					path: { group_id: Number(groupId) },
				});
				if (response.data?.score) {
					setScore(response.data?.score);
					if (score >= 90) {
						setFeedback(FeedBack.S);
					} else if (score >= 80) {
						setFeedback(FeedBack.A);
					} else if (score >= 70) {
						setFeedback(FeedBack.B);
					} else if (score >= 60) {
						setFeedback(FeedBack.C);
					} else {
						setFeedback(FeedBack.F);
					}
				}
			}
		};
		fetchScore();
	}, [score]);
	return (
		<Box w="full" minHeight="100vh">
			<VStack>
				<Box
					bg="gray.600"
					textAlign="left"
					height="40px"
					display="flex"
					alignItems="center"
					justifyContent="left"
					fontSize="xl"
				>
					<Text color="white" as="b" pl={4}>
						結果発表
					</Text>
				</Box>
			</VStack>
			<Box>
				<HStack
					textAlign="center"
					alignItems="center"
					justifyContent="center"
					p={4}
				>
					<Avatar />
					<Text fontSize="xl">ニックネーム</Text>
				</HStack>
				<Divider />
				<HStack
					textAlign="center"
					alignItems="center"
					justifyContent="center"
					p={4}
				>
					<Icon as={IoMdCheckboxOutline} w={9} h={9} />
					<Text as="b">期末試験 追試</Text>

					<Box borderRadius="lg" bg="blue.300">
						<Text p={2} color="black">
							{score} / 100
						</Text>
					</Box>
				</HStack>
				<Box>
					<Text>{feedback?.credits}</Text>
					<Box textAlign="left" px={4}>
						<Text fontSize="xl" as="b">
							コメント
						</Text>
					</Box>
					<Box mx={4} p={4} border="2px solid black">
						<Text>{feedback?.comment}</Text>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Result;
