import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	type RegisterFormSchemaType,
	registerFormSchema,
} from "../schema/formSchema";

const useRegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormSchemaType>({
		resolver: zodResolver(registerFormSchema),
	});

	const onSubmit = (data: RegisterFormSchemaType) => {
		console.log(data);
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};

export default useRegisterForm;
