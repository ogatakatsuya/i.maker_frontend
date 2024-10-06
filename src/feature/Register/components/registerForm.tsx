import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import sampleFormSchema from "../schema/formSchema";
import InputField from "./InputField";
import SelectField from "./SelectField";

const RegisterForm = () => {
	const methods = useForm({
		resolver: zodResolver(sampleFormSchema),
	});
	const { handleSubmit } = methods;
	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputField name="input" />
				<SelectField name="select" />
				<button type="submit">Submit</button>
			</form>
		</FormProvider>
	);
};

export default RegisterForm;
