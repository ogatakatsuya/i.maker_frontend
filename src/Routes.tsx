import type { RouteObject } from "react-router-dom";
import DynamicTest from "./components/DynamicTest";
import Home from "./components/Home";
import Test from "./components/Test";

const routes: RouteObject[] = [
	{
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/test", element: <Test /> },
			{ path: "/dynamic/:id", element: <DynamicTest /> },
		],
	},
];

export default routes;
