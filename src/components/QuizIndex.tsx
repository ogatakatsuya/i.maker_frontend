import {
	Box,
	Heading,
	Link,
	List,
	ListItem,
	Text,
	VStack,
} from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { getQuizSets } from "../client";
import type { GetQuizSetsResponse } from "../client/types.gen";

const QuizIndex = () => {
	const [quizSets, setQuizSets] = useState<GetQuizSetsResponse["quiz_sets"]>(
		[],
	);
	useEffect(() => {
		const fetchData = async () => {
			const response = await getQuizSets();
			if (response.data?.quiz_sets) {
				setQuizSets(response.data.quiz_sets);
			}
		};
		fetchData();
	}, []);

	return (
		<Box maxW="800px" mx="auto" p={4}>
			<Heading as="h1" size="xl" mb={6} textAlign="center">
				問題セット一覧
			</Heading>
			<VStack spacing={4}>
				<List spacing={3} w="100%">
					{quizSets.map((quizSet) => (
						<ListItem key={quizSet.id} p={4} borderWidth={1} borderRadius="md">
							<Heading as="h2" size="md" mb={2}>
								<Link href={`/home/${quizSet.id}`}>{quizSet.title}</Link>
							</Heading>
							<Text>{quizSet.description}</Text>
						</ListItem>
					))}
				</List>
			</VStack>
		</Box>
	);
};

export default QuizIndex;
