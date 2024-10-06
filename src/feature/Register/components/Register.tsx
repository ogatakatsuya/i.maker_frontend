import { Box, Text, VStack } from "@yamada-ui/react";
import RegisterForm from "./RegisterForm";

const Register = () => {
	return (
		<Box w="full" minHeight="100vh">
			<VStack>
				<Box bg="blue.100" textAlign="left">
					<Text my={1} ml={2} color="#05397f">
						ニックネーム登録
					</Text>
				</Box>
				<RegisterForm />
				<Text as="u" fontSize="sm">
					ポータルサイト
					<br />
					情報セキュリティに関する連絡先
					<br />
					ログインにお困りの場合はこちら
				</Text>
				<Text fontSize="sm">
					＜お知らせ＞
					<br />
					MFA(多要素認証)はシステムごとに異なります。
					<br />
					それぞれの設定方法は<Text as="u">こちら</Text>をご確認ください。
				</Text>
				<Text fontSize="sm">
					MFA settings are required separately for each system.
					<br />
					please read <Text as="u">this page.</Text>
				</Text>
			</VStack>
		</Box>
	);
};

export default Register;
