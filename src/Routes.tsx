import type { RouteObject } from "react-router-dom";
import QuizIndex from "./components/QuizIndex";
import Home from "./feature/Home/components/Home";
import Quiz from "./feature/Quiz/components/Quiz";
import Register from "./feature/Register/components/Register";

const routes: RouteObject[] = [
	{
		children: [
			{ path: "/", element: <QuizIndex /> },
			{ path: "/home/:quiz_set_id", element: <Home /> },
			{ path: "/register/:quiz_set_id", element: <Register /> },
			{ path: "/quiz/:quiz_set_id", element: <Quiz /> },
		],
	},
];

export default routes;
