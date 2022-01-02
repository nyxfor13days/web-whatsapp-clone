import React from "react";
import styled from "styled-components";

import theme from "../assets/config/theme";

import { IconButton, Avatar } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

const Message = ({ isReceiver }) => {
	return (
		<ChatMessage isReceiver={isReceiver}>
			<ChatUsername>User</ChatUsername>
			<p>This is a message</p>
			<ChatTimeStamp>{new Date().toLocaleString()}</ChatTimeStamp>
		</ChatMessage>
	);
};

const setInput = () => {};

const Chat = () => {
	return (
		<ChatContainer>
			<ChatHeader>
				<Avatar />

				<ChatHeaderInfo>
					<Username>Room Name</Username>
					<LastSeen>Last seen at ...</LastSeen>
				</ChatHeaderInfo>

				<ChatHeaderRight>
					<IconButton>
						<SearchIcon />
					</IconButton>

					<IconButton>
						<AttachFileIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</ChatHeaderRight>
			</ChatHeader>

			<ChatBody>
				<Message />
				<Message isReceiver />
				<Message />
				<Message />
			</ChatBody>

			<ChatFooter>
				<InsertEmoticonIcon />
				<Form>
					<TextInput type="text" placeholder="Type a message" onChange={(e) => setInput(e.bubbles)} />
					<IconButton>
						<SendIcon />
					</IconButton>
				</Form>
				<IconButton>
					<MicIcon />
				</IconButton>
			</ChatFooter>
		</ChatContainer>
	);
};

const ChatContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.75;
	background: ${theme.backgroundLight};
`;

const ChatHeader = styled.div`
	display: flex;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid ${theme.backgroundLight};
`;

const ChatHeaderInfo = styled.div`
	flex: 1;
	padding-left: 20px;
`;

const Username = styled.h3`
	margin-bottom: 3px;
	font-weight: 500;
`;

const LastSeen = styled.p`
	color: ${theme.textDark};
`;

const ChatHeaderRight = styled.div``;

const ChatBody = styled.div`
	flex: 1;
	padding: 30px;
	background: ${theme.backgroundDark};
	overflow-y: scroll;
`;

const ChatMessage = styled.p`
	position: relative;
	font-size: 14px;
	padding: 10px 20px;
	width: fit-content;
	margin-bottom: 50px;
	margin-left: ${(props) => (props.isReceiver ? "auto" : "0")};
	background: ${(props) => (props.isReceiver ? theme.senderChatBubble : theme.receiverChatBubble)};
	border-radius: 20px;
`;

const ChatUsername = styled.span`
	position: absolute;
	top: -15px;
	left: 10px;
	font-weight: 800;
	font-size: 10px;
`;

const ChatTimeStamp = styled.span`
	position: absolute;
	bottom: -15px;
	right: 10px;
	font-size: 10px;
`;

const ChatFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 25px;
	height: 60px;
	background: ${theme.backgroundDark};
`;

const Form = styled.form`
	flex: 1;
	display: flex;
`;

const TextInput = styled.input`
	width: 100%;
	padding: 0 25px;
	margin-left: 10px;
	color: ${theme.text};
	background: ${theme.backgroundLight};
	border: none;
	border-radius: 25px;
	outline: none;

	&::placeholder {
		color: ${theme.textDark};
	}
`;

export default Chat;
