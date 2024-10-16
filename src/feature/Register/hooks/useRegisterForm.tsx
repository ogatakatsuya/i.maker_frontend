import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerGroupWithSubId } from "../../../client/services.gen";
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
		const response = await registerGroupWithSubId({
			body: request,
			path: { quiz_set_sub_id: quiz_set_id },
		});
		console.log(response);
		if (response.status === 400) {
			alert(response.error?.detail);
		}
		if (response.data?.id) {
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
