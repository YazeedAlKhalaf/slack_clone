import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { mainChannelsItems, channelsItems } from "../../data/sidebarData";
import db from "../../utils/firebase";

function Sidebar({ rooms }) {
  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

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
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>
        <ChannelsList>
          {rooms.map((room) => (
            <ChannelItem># {room.name}</ChannelItem>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background-image: linear-gradient(
    ${({ theme }) => theme.sidebarBgColor},
    ${({ theme }) => theme.sidebarBgColor2},
    ${({ theme }) => theme.sidebarBgColor2}
  );
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
  transition: 0.25s ease;

  :hover {
    transform: scale(0.8);
  }
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItem = styled.div`
  color: #ffffff;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  transition: 0.25s ease;

  :hover {
    background: ${({ theme }) => theme.sidebarHoverBgColor};
    transform: scale(1.05);
  }
`;

const ChannelsContainer = styled.div`
  color: #ffffff;
  margin-top: 10px;
  transition: 0.25s ease;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;

  .MuiSvgIcon-root {
    cursor: pointer;
    transition: 0.25s ease;

    :hover {
      transform: scale(0.8);
    }
  }
`;

const ChannelsList = styled.div``;

const ChannelItem = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  transition: 0.25s ease;

  :hover {
    background: ${({ theme }) => theme.sidebarHoverBgColor};
    transform: scale(1.05);
  }
`;
