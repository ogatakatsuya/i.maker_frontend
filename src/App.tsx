import "./App.css";
import { UIProvider } from "@yamada-ui/react";
import { useRoutes } from "react-router-dom";
import routes from "./Routes";

function App() {
	const routing = useRoutes(routes);
	return <UIProvider>{routing}</UIProvider>;
}

export default App;
