import { Box, Text } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { TimeToDisplayHint } from "../../../lib/constants";

const Hint = ({
	hint,
	questionIndex,
	time,
	setHintNum,
}: {
	hint: string;
	questionIndex: number;
	time: number;
	setHintNum: (arg: (prev: number) => number) => void;
}) => {
	const [showHint, setShowHint] = useState<boolean>(false);
	useEffect(() => {
		if (!showHint && time > TimeToDisplayHint[questionIndex]) {
			setShowHint(true);
			setHintNum((prev) => prev + 1);
		}
	}, [questionIndex, setHintNum, showHint, time]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setShowHint(false);
	}, [questionIndex]);
	return (
		<Box py={4}>
			<Box
				bg="gray.500"
				color="white"
				fontSize="xl"
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="150px"
				textAlign="center"
				borderRadius="lg"
			>
				{!showHint ? (
					<Box>
						<Text as="b" fontSize="2xl">
							ヒント
						</Text>
					</Box>
				) : (
					<Box>
						<Text as="b">ヒント</Text>
						<Text fontSize="md">{hint}</Text>
					</Box>
				)}
			</Box>
			{!showHint && (
				<Box p={2}>
					<Text color="#05397f" as="b" fontSize="lg">
						ヒントは{TimeToDisplayHint[questionIndex] - time}
						秒後に表示されます
					</Text>
				</Box>
			)}
		</Box>
	);
};

export default Hint;
