import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Components/chat/Chat";
import Login from "./Components/login/Login";
import styled from "styled-components";
import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import { useState } from "react";

function App() {
	const [isDark, setIsDark] = useState(false);
	const toggleMode = () => setIsDark(!isDark);

	return (
		<div className="app">
			<Router>
				<Container>
					<Header isDark={isDark} toggleMode={toggleMode} />
					<Main>
						<Sidebar isDark={isDark} />
						<Switch>
							<Route path="/room">
								<Chat isDark={isDark} />
							</Route>
							<Route path="/">
								<Login isDark={isDark} />
							</Route>
						</Switch>
					</Main>
				</Container>
			</Router>
		</div>
	);
}

export default App;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 50px auto;
`;
const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;
`;
