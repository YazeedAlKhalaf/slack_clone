import React from "react";
import styled from "styled-components";

function ChatMessage({ text, name, image, timestamp }) {
  return (
    <Container>
      <MessageHeader>
        <UserAvatar>
          <img src={image} alt="user_avatar" />
        </UserAvatar>
        <MessageInfo>
          <Name>{name}</Name>
          <MessagePostDate>
            {new Date(timestamp.toDate()).toUTCString()}
          </MessagePostDate>
        </MessageInfo>
      </MessageHeader>
      <MessageContent>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  transition: 0.4s ease;

  :hover {
    background: ${({ theme }) => theme.chatMessageHoverBgColor};
  }
`;

const MessageHeader = styled.div`
  display: flex;
`;

const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;

  img {
    width: 100%;
  }
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  color: #0a92ea;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97 96 97);
  }
`;

const MessagePostDate = styled.span`
  font-size: 10px;
  font-weight: 400;
  color: #606060;
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 70px;
`;

const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
