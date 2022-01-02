import React from "react";
import styled from "styled-components";

import theme from "./assets/config/theme";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
	return (
		<AppContainer>
			<AppBody>
				<Sidebar />
				<Chat />
			</AppBody>
		</AppContainer>
	);
};

const AppContainer = styled.div`
	display: grid;
	place-items: center;
	height: 100vh;
	width: 100vw;
	background: ${theme.backgroundLight};
	color: ${theme.textLight};
`;
const AppBody = styled.div`
	display: flex;
	flex-direction: row;
	height: 90vh;
	width: 90vw;
	background: ${theme.backgroundDark};
	box-shadow: 0px 2px 10px 0px rgba(46, 52, 64, 1);
`;

export default App;
