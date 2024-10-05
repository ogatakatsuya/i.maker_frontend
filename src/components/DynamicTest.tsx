import { useParams } from "react-router-dom";

const DynamicTest = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Dynamic Test</h1>
			<p>Dynamic ID: {id}</p>
		</div>
	);
};

export default DynamicTest;
