import type { RouteObject } from "react-router-dom";
import QuizIndex from "./components/QuizIndex";
import Home from "./feature/Home/Home";
import QuizSet from "./feature/Question/QuizSet";
import Quiz from "./feature/Quiz/Quiz";
import Register from "./feature/Register/Register";
import Result from "./feature/Result/Result";

const routes: RouteObject[] = [
	{
		children: [
			{ path: "/", element: <QuizIndex /> },
			{ path: "/home/:quiz_set_id", element: <Home /> },
			{ path: "/register/:quiz_set_id", element: <Register /> },
			{ path: "/quiz/:quiz_set_id", element: <Quiz /> },
			{ path: "/question/:quiz_set_id", element: <QuizSet /> },
			{ path: "/result/:quiz_set_id", element: <Result /> },
		],
	},
];

export default routes;
