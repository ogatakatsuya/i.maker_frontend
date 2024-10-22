import type { RouteObject } from "react-router-dom";
import QuizIndex from "./components/QuizIndex";
import AddQuestionForm from "./feature/AddQuestion/AddQuestionForm";
import Admin from "./feature/Admin/Admin";
import Home from "./feature/Home/Home";
import QuizSet from "./feature/Question/QuizSet";
import Quiz from "./feature/Quiz/Quiz";
import QuizEditer from "./feature/QuizEditer/QuizEditer";
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
			{ path: "/admin/i.maker/e53f4181", element: <Admin /> },
			{ path: "/admin/i.maker/e53f4181/:quiz_set_id", element: <QuizEditer /> },
			{
				path: "/admin/i.maker/e53f4181/create/:quiz_set_id",
				element: <AddQuestionForm />,
			},
		],
	},
];

export default routes;
