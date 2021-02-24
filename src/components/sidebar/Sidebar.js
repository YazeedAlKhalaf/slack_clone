import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { mainChannelsItems, channelsItems } from "../../data/sidebarData";

function Sidebar() {
  return (
    <Container>
      <WorkspaceContainer>
        <Name>CleverProgrammer</Name>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {mainChannelsItems.map((mainChannelItem) => (
          <MainChannelItem>
            {mainChannelItem.icon}
            {mainChannelItem.text}
          </MainChannelItem>
        ))}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          Channels
          <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          {channelsItems.map((channelItem) => (
            <ChannelItem># {channelItem.text}</ChannelItem>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: ${({ theme }) => theme.sidebarBgColor};
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: ${({ theme }) => theme.sidebarBgColor};
  fill: ${({ theme }) => theme.sidebarBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: rgb(188 171 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.sidebarHoverBgColor};
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188 171 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div``;

const ChannelItem = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.sidebarHoverBgColor};
  }
`;
