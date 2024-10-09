import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useQuizSetCont = (
	countTime: number | null,
	setCountTime: (arg0: number) => void,
	quiz_set_id: string | undefined,
) => {
	const navigate = useNavigate();
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (countTime === 0) {
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
	}, [countTime, setCountTime, quiz_set_id, navigate]);
};

export default useQuizSetCont;
