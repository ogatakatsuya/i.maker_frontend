import { Text, VStack } from "@yamada-ui/react";
import { useParams } from "react-router-dom";

const Register = () => {
	const { quiz_set_id } = useParams();
	return (
		<VStack alignItems="stretch">
			<Text w="full" bg="blue.100" textAlign="left">
				ニックネーム登録
			</Text>
			<Text>あなたが解くのは問題{quiz_set_id}です。</Text>
		</VStack>
	);
};

export default Register;
