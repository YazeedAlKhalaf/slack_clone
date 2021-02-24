import React from "react";
import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://i.imgur.com/6VBx3io.png" alt="user_avatar" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Yazeed AlKhalaf
          <span>2/23/2021 12:08 AM</span>
        </Name>
        <Text>This the best Slack Clone</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
  transition: 0.4s ease;

  :hover {
    background: ${({ theme }) => theme.chatMessageHoverBgColor};
  }
`;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 8px;

  img {
    width: 100%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97 96 97);
  }
`;

const Text = styled.span``;
