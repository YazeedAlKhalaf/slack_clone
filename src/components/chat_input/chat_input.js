import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import CustomSlackButton from "./buttons/custom_slack_button";
import FlashOnRoundedIcon from "@material-ui/icons/FlashOnRounded";
import FormatBoldRoundedIcon from "@material-ui/icons/FormatBoldRounded";
import FormatItalicRoundedIcon from "@material-ui/icons/FormatItalicRounded";
import StrikethroughSRoundedIcon from "@material-ui/icons/StrikethroughSRounded";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import LinkRoundedIcon from "@material-ui/icons/LinkRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";
import DeveloperModeRoundedIcon from "@material-ui/icons/DeveloperModeRounded";

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <textarea
            rows="3"
            maxLength="500"
            type="text"
            placeholder="Message here..."
          />
          <ChatInputEditor>
            <LeftChatEditor>
              <CustomSlackButton icon={<FlashOnRoundedIcon />} />

              <Separator>|</Separator>
              <CustomSlackButton icon={<FormatBoldRoundedIcon />} />
              <CustomSlackButton icon={<FormatItalicRoundedIcon />} />
              <CustomSlackButton icon={<StrikethroughSRoundedIcon />} />
              <CustomSlackButton icon={<CodeRoundedIcon />} />
              <CustomSlackButton icon={<LinkRoundedIcon />} />
              <CustomSlackButton icon={<FormatListNumberedRoundedIcon />} />
              <CustomSlackButton icon={<FormatListBulletedRoundedIcon />} />
              <CustomSlackButton icon={<FormatQuoteRoundedIcon />} />
              <CustomSlackButton icon={<DeveloperModeRoundedIcon />} />
            </LeftChatEditor>

            <RightChatEditor>
              <SendButton>
                <SendIcon />
              </SendButton>
            </RightChatEditor>
          </ChatInputEditor>
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
  box-shadow: 5px 5px 15px 3px ${({ theme }) => theme.chatInputBoxShadowColor};
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    height: min-content;
    align-items: space-evenly;

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
    padding-bottom: 15px;

    textarea {
      flex: 1;
      border: none;
      font-size: 13px;
      background: transparent;
      resize: none;
      overflow: hidden;
    }

    textarea:focus {
      outline: none;
    }
  }
`;

const ChatInputEditor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftChatEditor = styled.div`
  display: flex;
  align-items: center;
`;

const Separator = styled.span`
  font-size: 20px;
`;

const RightChatEditor = styled.div`
  display: flex;
  align-items: center;
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
