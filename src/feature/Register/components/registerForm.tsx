import {
	Button,
	ErrorMessage,
	FormControl,
	Input,
	Label,
	VStack,
} from "@yamada-ui/react";
import useRegisterForm from "../hooks/useRegisterForm";

const RegisterForm = () => {
	const { register, onSubmit, errors } = useRegisterForm();

	return (
		<VStack as="form" onSubmit={onSubmit} p={4}>
			<FormControl isInvalid={!!errors.name}>
				<Label htmlFor={"name"}>チーム名</Label>
				<Input id="name" {...register("name")} />
				<ErrorMessage>{errors.name?.message}</ErrorMessage>
			</FormControl>
			<FormControl isInvalid={!!errors.memberNum}>
				<Label htmlFor={"memberNum"}>チームのメンバー数</Label>
				<Input
					id="memberNum"
					{...register("memberNum", { valueAsNumber: true })}
				/>
				<ErrorMessage>{errors.memberNum?.message}</ErrorMessage>
			</FormControl>
			<Button type="submit" size="sm">
				登録
			</Button>
		</VStack>
	);
};

export default RegisterForm;
