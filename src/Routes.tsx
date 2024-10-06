import type { RouteObject } from "react-router-dom";
import QuizIndex from "./components/QuizIndex";
import Home from "./feature/Home/components/Home";
import Register from "./feature/Register/components/Register";

const routes: RouteObject[] = [
	{
		children: [
			{ path: "/", element: <QuizIndex /> },
			{ path: "/home/:quiz_set_id", element: <Home /> },
			{ path: "/register/:quiz_set_id", element: <Register /> },
		],
	},
];

export default routes;
