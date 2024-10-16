import { Box, Heading } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { getScore } from "../../../client/services.gen";

const Result = () => {
	const [score, setScore] = useState<number>(0);
	useEffect(() => {
		const fetchScore = async () => {
			const groupId = sessionStorage.getItem("groupId");
			if (groupId == null) return;
			const response = await getScore({
				path: { group_id: Number(groupId) },
			});
			if (response.data?.score) {
				setScore(response.data?.score);
			}
		};
		fetchScore();
	}, []);
	return (
		<Box>
			<Heading>Result</Heading>
			<Box>Score: {score}</Box>
		</Box>
	);
};

export default Result;
