import React from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "../chat_input/chat_input";
import ChatMessage from "../chat_message/chat_message";

function Chat() {
  return (
    <Container>
      <ChatHeader>
        <LeftHeaderPart>
          <ChannelName>
            # clever
            <StarChannel>
              <StarBorderOutlinedIcon />
            </StarChannel>
          </ChannelName>

          <ChannelTagline>
            company-wide announcements and work-based matters
          </ChannelTagline>
        </LeftHeaderPart>
        <RightHeaderPart>
          <p>Details</p>
          <InfoOutlinedIcon />
        </RightHeaderPart>
      </ChatHeader>

      <MessageContainer>
        <ChatMessage />
      </MessageContainer>

      <ChatInput></ChatInput>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 16px;
  border-bottom: 1px solid #c1c1c1;
`;

const LeftHeaderPart = styled.div``;

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
`;

const ChannelTagline = styled.div`
  color: #606060;
  font-size: 13px;
  font-weight: 400;
  margin-top: 8px;
`;

const StarChannel = styled.div`
  display: flex;
  align-items: center;
  transform: scale(0.8);
  transition: 0.25s ease;
  cursor: pointer;

  :hover {
    transform: scale(1);
  }
`;

const RightHeaderPart = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  padding: 10px;
  transition: 0.25s ease;
  cursor: pointer;
  border-radius: 15px;

  :hover {
    background: #dcdcdc;
  }

  p {
    padding-right: 5px;
  }
`;

const MessageContainer = styled.div``;
