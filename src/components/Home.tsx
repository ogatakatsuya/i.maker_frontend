const Home = () => {
	const apiUrl = import.meta.env.VITE_API_URL;
	return (
		<div>
			<h1>Home</h1>
			<p>API URL: {apiUrl}</p>
		</div>
	);
};

export default Home;
