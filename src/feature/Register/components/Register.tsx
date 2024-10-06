import { Box, Text, VStack } from "@yamada-ui/react";
import { useParams } from "react-router-dom";
import RegisterForm from "./registerForm";

const Register = () => {
	const { quiz_set_id } = useParams();
	return (
		<Box w="full" minHeight="100vh">
			<VStack>
				<Box bg="blue.100" textAlign="left">
					<Text my={1} ml={2} color="#05397f">
						ニックネーム登録
					</Text>
					<RegisterForm />
				</Box>
				<Text>あなたが解くのは問題{quiz_set_id}です。</Text>
			</VStack>
		</Box>
	);
};

export default Register;
