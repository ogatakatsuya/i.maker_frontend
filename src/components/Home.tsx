import { useEffect, useState } from "react";
import { getQuizSetsQuizSetsGet } from "../client";
import type { GetQuizSetsResponse } from "../client/types.gen";

const Home = () => {
	const [quizSets, setQuizSets] = useState<GetQuizSetsResponse["quiz_sets"]>(
		[],
	);
	useEffect(() => {
		const fetchData = async () => {
			const response = await getQuizSetsQuizSetsGet();
			if (response.data?.quiz_sets) {
				setQuizSets(response.data.quiz_sets);
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<h1>問題セット一覧</h1>
			<ul>
				{quizSets.map((quizSet) => (
					<li key={quizSet.id}>
						<h2>{quizSet.title}</h2>
						<p>{quizSet.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
