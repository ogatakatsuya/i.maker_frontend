import type { RouteObject } from "react-router-dom";
import DynamicTest from "./components/DynamicTest";
import Home from "./components/Home";
import QuizIndex from "./components/QuizIndex";
import Test from "./components/Test";

const routes: RouteObject[] = [
	{
		children: [
			{ path: "/", element: <QuizIndex /> },
			{ path: "/test", element: <Test /> },
			{ path: "/dynamic/:id", element: <DynamicTest /> },
			{ path: "/home", element: <Home /> },
		],
	},
];

export default routes;
