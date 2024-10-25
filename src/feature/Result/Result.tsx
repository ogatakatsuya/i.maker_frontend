import {
	Avatar,
	Box,
	Divider,
	HStack,
	Icon,
	Image,
	Loading,
	Text,
	VStack,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { getScore } from "../../client/services.gen";
import { FeedBack, type FeedBackEntry } from "../../lib/constants";

const Result = () => {
	const [score, setScore] = useState<number | null>(null);
	const [nickName, setNickName] = useState<string | null>(null);
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
					setNickName(response.data?.name);
					if (score != null) {
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
			{score === null ? (
				<VStack>
					<Text as="b" p={4}>
						もしローディング画面が10秒以上続く場合は
						<br />
						ページを更新してください。
					</Text>
					<Box display="flex" justifyContent="center" alignItems="center">
						<Loading size="xl" color="blue.500" />
					</Box>
				</VStack>
			) : (
				<Box>
					<HStack
						textAlign="center"
						alignItems="center"
						justifyContent="center"
						p={2}
					>
						<Avatar />
						<Text fontSize="lg">{nickName}</Text>
					</HStack>
					<Divider />
					<HStack
						textAlign="center"
						alignItems="center"
						justifyContent="center"
						p={2}
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
						<Image
							src={feedback?.image}
							fallback="https://via.placeholder.com/512"
							fallbackStrategy="onError"
							maxWidth="100%"
							height="auto"
							objectFit="contain"
							className="logo"
						/>
						<Box textAlign="left" px={4}>
							<Text fontSize="xl" as="b">
								コメント
							</Text>
						</Box>
						<Box mx={4} p={4} border="2px solid black" fontSize="sm">
							<Text>{feedback?.comment}</Text>
						</Box>
						<Box p={6}>
							<Text as="b">
								解答完了後はTAの指示に従ってください。
								<br />
								試験お疲れ様でした。
							</Text>
						</Box>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Result;
