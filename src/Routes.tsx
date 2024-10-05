import { RouteObject } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";

const routes: RouteObject[] = [
	{
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/test", element: <Test /> },
		],
	},
];

export default routes;
