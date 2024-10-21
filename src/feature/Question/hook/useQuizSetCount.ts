import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerScore } from "../../../client/services.gen";

const useQuizSetCont = (
	countTime: number | null,
	setCountTime: (arg0: number) => void,
	quiz_set_id: string | undefined,
	questionIndex: number,
	missingNum: number,
	hintNum: number,
) => {
	const navigate = useNavigate();
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (countTime === 0) {
				const groupId = sessionStorage.getItem("groupId");
				if (groupId == null) return;
				registerScore({
					body: {
						correct_num: questionIndex,
						incorrect_answers_num: missingNum,
						showed_hint_num: hintNum,
						is_time_over: true,
					},
					path: { group_id: Number(groupId) },
				});
				navigate(`/result/${quiz_set_id}`);
				clearInterval(countDownInterval);
			}
			if (countTime && countTime > 0) {
				setCountTime(countTime - 1);
			}
		}, 1000);
		return () => {
			clearInterval(countDownInterval);
		};
	}, [
		countTime,
		setCountTime,
		quiz_set_id,
		navigate,
		questionIndex,
		missingNum,
		hintNum,
	]);
};

export default useQuizSetCont;
