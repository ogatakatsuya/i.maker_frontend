import {
	Button,
	Center,
	Icon,
	Image,
	Link,
	Text,
	VStack,
} from "@yamada-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import icon from "../assets/nazotoki_icon.png";

const Home = () => {
	return (
		<Center>
			<VStack spacing={4}>
				<Image
					src={icon}
					fallback="https://via.placeholder.com/512"
					fallbackStrategy="onError"
					maxWidth="100%"
					height="auto"
					objectFit="contain"
					className="logo"
				/>
				<Button>ニックネーム登録</Button>
				<Link>プライバシーポリシー/Privacy Policy</Link>
				<Text>
					<Icon as={IoIosInformationCircleOutline} />
					2024 produced by i.maker
				</Text>
			</VStack>
		</Center>
	);
};

export default Home;
