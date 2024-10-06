import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerGroup } from "../../../client/services.gen";
import type { CreateGroupRequest } from "../../../client/types.gen";
import {
	type RegisterFormSchemaType,
	registerFormSchema,
} from "../schema/formSchema";

const useRegisterForm = (quiz_set_id: string | undefined) => {
	const navigation = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormSchemaType>({
		resolver: zodResolver(registerFormSchema),
	});

	const onSubmit = async (data: RegisterFormSchemaType) => {
		const request: CreateGroupRequest = {
			name: data.name,
			member_num: data.memberNum,
		};
		if (!quiz_set_id) {
			return;
		}
		const response = await registerGroup({
			body: request,
			path: { quiz_set_id: Number.parseInt(quiz_set_id) },
		});
		if (response.data?.message) {
			navigation(`/quiz/${quiz_set_id}`);
		}
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};

export default useRegisterForm;
