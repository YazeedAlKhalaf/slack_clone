import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />
          <SendButton>
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 10px;

  form {
    display: flex;
    height: 42px;
    align-items: center;

    padding-left: 10px;
    padding-right: 10px;

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      background: transparent;
    }

    input:focus {
      outline: none;
    }
  }
`;

const SendButton = styled.div`
  background: #007a5a;
  color: #d9d9d9;
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.25s ease;

  :hover {
    transform: scale(0.9);
  }

  .MuiSvgIcon-root {
    width: 18px;
  }
`;
