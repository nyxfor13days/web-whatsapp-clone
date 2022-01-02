import React from "react";
import styled from "styled-components";

import theme from "../assets/config/theme";

import { Avatar } from "@mui/material";

const SidebarChat = () => {
	return (
		<SidebarChatContainer>
			<Avatar />
			<ChatInfo>
				<Username>Room Name</Username>
				<ChatMessage>lorem ipsum</ChatMessage>
			</ChatInfo>
		</SidebarChatContainer>
	);
};

const SidebarChatContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	cursor: pointer;
	border-right: 1px solid ${theme.backgroundLight};
	border-bottom: 1px solid ${theme.backgroundLight};
	transition: all ease 250ms;

	&:hover {
		background: ${theme.backgroundLight};
	}
`;

const ChatInfo = styled.div`
	margin-left: 15px;
`;

const Username = styled.h2`
	font-size: 18px;
	margin-bottom: 8px;
`;

const ChatMessage = styled.p``;

export default SidebarChat;
