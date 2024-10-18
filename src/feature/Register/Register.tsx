import { Box, Text, VStack } from "@yamada-ui/react";
import { useParams } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string | undefined }>();
	return (
		<Box w="full" minHeight="100vh">
			<VStack>
				<Box
					bg="blue.100"
					textAlign="left"
					height="40px"
					display="flex"
					alignItems="center"
					justifyContent="left"
					fontSize="xl"
				>
					<Text color="#05397f" pl={4}>
						ニックネーム登録
					</Text>
				</Box>
				<RegisterForm quiz_set_id={quiz_set_id} />
				<Text as="u" fontSize="sm">
					登録にお困りの場合は
					<br />
					TAに相談の上
					<br />
					自分で頑張ってください
				</Text>
				<Text fontSize="sm">
					＜お知らせ＞
					<br />
					大学のポータルサイトCLEとは異なります。
					<br />
					謎解きの解答のみがこのサイトで可能です。
				</Text>
				<Text fontSize="sm">
					The website differs from the university portal, CLE.
					<br />
					It is exclusively for submitting answers
					<br />
					to the puzzle challenges.
				</Text>
			</VStack>
		</Box>
	);
};

export default Register;
