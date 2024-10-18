import { useEffect } from "react";

const useQuizSetCount = (
	countTime: number | null,
	setCountTime: (arg0: number) => void,
	questionIndex: number,
) => {
	useEffect(() => {
		const countDownInterval = setInterval(() => {
			if (countTime !== null) {
				setCountTime(countTime + 1);
			}
		}, 1000);
		return () => {
			clearInterval(countDownInterval);
		};
	}, [countTime, setCountTime]);
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setCountTime(0);
	}, [questionIndex, setCountTime]);
};

export default useQuizSetCount;
