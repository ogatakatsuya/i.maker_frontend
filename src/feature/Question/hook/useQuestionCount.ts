import { useEffect } from "react";

const useQuizSetCont = (
	countTime: number | null,
	setCountTime: (arg0: number) => void,
	setQustionIndex: (arg0: (prev: number) => number) => void,
	timePerQuestion: number,
) => {
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (countTime === 0) {
				setQustionIndex((prev: number) => prev + 1);
				setCountTime(timePerQuestion);
				clearInterval(countDownInterval);
			}
			if (countTime && countTime > 0) {
				setCountTime(countTime - 1);
			}
		}, 1000);
		return () => {
			clearInterval(countDownInterval);
		};
	}, [countTime, setCountTime, setQustionIndex, timePerQuestion]);
};

export default useQuizSetCont;
