import { useFormContext } from "react-hook-form";

type Props = {
	name: string;
};
function InputField(props: Props) {
	const methods = useFormContext();
	return (
		<div>
			<input {...methods.register(props.name)} />
			{methods.formState.errors[props.name] && (
				<p>{methods.formState.errors[props.name]?.message as string}</p>
			)}
		</div>
	);
}

export default InputField;
