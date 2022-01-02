import React from "react";
import styled from "styled-components";

import theme from "../assets/config/theme";

import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Avatar } from "@mui/material";

import SidebarChat from "./SidebarChat";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarHeader>
				<HeaderLeft>
					<Avatar src="https://randomuser.me/api/portraits/men/9.jpg" />
				</HeaderLeft>

				<HeaderRight>
					<IconButton>
						<DataSaverOffIcon />
					</IconButton>

					<IconButton>
						<ChatIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</HeaderRight>
			</SidebarHeader>

			<SidebarSearch>
				<SearchContainer>
					<SearchIcon />
					<Search type="text" placeholder="Search or start new chat" />
				</SearchContainer>
			</SidebarSearch>

			<SidebarChats>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</SidebarChats>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.25;
`;

const SidebarHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background: ${theme.backgroundLight};
	border-right: 1px solid ${theme.backgroundLight};
`;

const HeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 10vw;
`;

const HeaderLeft = styled.div``;

const SidebarSearch = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	background-color: ${theme.backgroundDark};
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 35px;
	background-color: ${theme.backgroundLight};
	border-radius: 25px;

	& .MuiSvgIcon-root {
		margin: 0 0 0 10px;
		font-size: 16px;
	}
`;

const Search = styled.input`
	width: 100%;
	margin-left: 10px;
	color: ${theme.text};
	background: none;
	border: none;
	outline: none;

	&::placeholder {
		color: ${theme.textDark};
	}
`;

const SidebarChats = styled.div`
	flex: 1;
	overflow-y: scroll;
`;

export default Sidebar;
