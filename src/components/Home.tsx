import { ui } from "@yamada-ui/core";
import { Box, Icon, Image, Link, Text, VStack } from "@yamada-ui/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import icon from "../assets/nazotoki_icon.png";

const Home = () => {
	const Button = ui("button", {
		baseStyle: {
			py: "sm",
			px: "md",
			rounded: "md",
			bg: "#05397f",
			color: "white",
			_hover: { bg: "blue.800" },
		},
	});
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/register");
	};
	return (
		<Box bg="gray.100" w="100%" minHeight="100vh" p={4}>
			<VStack spacing={4} p={10}>
				<Image
					src={icon}
					fallback="https://via.placeholder.com/512"
					fallbackStrategy="onError"
					maxWidth="100%"
					height="auto"
					objectFit="contain"
					className="logo"
				/>
				<Button onClick={handleClick} colorScheme="primary">
					ニックネーム登録
				</Button>
				<Link>プライバシーポリシー/Privacy Policy</Link>
				<Text>
					<Icon as={IoIosInformationCircleOutline} />
					2024 produced by i.maker
				</Text>
			</VStack>
		</Box>
	);
};

export default Home;
