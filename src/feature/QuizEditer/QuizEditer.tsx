import { Box, Text } from "@yamada-ui/react";
import { useParams } from "react-router-dom";

const QuizEditer = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	return (
		<Box>
			<Text>編集画面</Text>
			<Text>{quiz_set_id}</Text>
		</Box>
	);
};

export default QuizEditer;
