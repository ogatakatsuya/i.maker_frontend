import { Container, Heading } from "@yamada-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizSet } from "../../../client/services.gen";
import type { GetQuizSetResponse } from "../../../client/types.gen";

const Quiz = () => {
	const { quiz_set_id } = useParams<{ quiz_set_id: string }>();
	const [quizSet, setQuizSet] = useState<GetQuizSetResponse | null>(null);

	useEffect(() => {
		const fetchQuizSet = async () => {
			if (quiz_set_id) {
				const response = await getQuizSet({
					path: { quiz_set_id: Number.parseInt(quiz_set_id) },
				});
				if (response.data) {
					setQuizSet(response.data);
				}
			}
		};

		fetchQuizSet();
	}, [quiz_set_id]);

	return (
		<Container>
			<Heading>Quiz</Heading>
			{quizSet && (
				<>
					<Heading as="h2">{quizSet.title}</Heading>
					<p>{quizSet.description}</p>
					{quizSet.questions.map((question) => (
						<div key={question.id}>
							<p>{question.content}</p>
						</div>
					))}
				</>
			)}
		</Container>
	);
};

export default Quiz;
