import { Box, Text } from "@yamada-ui/react";
import { TimeToDisplayHint } from "../../../lib/constants";

const Hint = ({
	hint,
	questionIndex,
	time,
}: { hint: string; questionIndex: number; time: number }) => {
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
				{time < TimeToDisplayHint[questionIndex] ? (
					<Box>
						<Text as="b" fontSize="2xl">
							ヒント
						</Text>
					</Box>
				) : (
					<Box>
						<Text as="b">ヒント</Text>
						<Text>{hint}</Text>
					</Box>
				)}
			</Box>
			{time < TimeToDisplayHint[questionIndex] && (
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
