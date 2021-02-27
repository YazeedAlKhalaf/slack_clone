import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { mainChannelsItems } from "../../data/sidebarData";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import AddChannelDialog from "./add_channel_dialog/add_channel_dialog";
import { useHistory } from "react-router-dom";
import db from "../../utils/firebase";
import { userKey } from "../../utils/constants";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import AddWorkspaceDialog from "./add_workspace_dialog/add_workspace_dialog";

function Sidebar() {
  const [channelsCollapsed, setChannelsCollapsed] = useState(true);
  const user = JSON.parse(localStorage.getItem(userKey));
  const [workspaces, setWorkspaces] = useState([]);
  const [channels, setChannels] = useState([]);
  const [currentWorkspaceIndex, setCurrentWorkspaceIndex] = useState(0);

  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.replace(
        `/workspaces/${workspaces[currentWorkspaceIndex].id}/channels/${id}`
      );
    }
  };

  const getWorkspaces = () => {
    console.log(user.id);
    db.collection("workspaces")
      .where("membersIds", "array-contains", user.id)
      .onSnapshot((snapshot) => {
        setWorkspaces(
          snapshot.docs.map((doc) => {
            console.log("Workspaces: ", snapshot.docs);
            return {
              id: doc.id,
              membersIds: doc.data().membersIds,
              name: doc.data().name,
            };
          })
        );

        getChannels(snapshot.docs[currentWorkspaceIndex].id);
      });
  };

  const getChannels = (workspaceId) => {
    console.log("Workspace ID: ", workspaceId);
    db.collection("workspaces")
      .doc(workspaceId)
      .collection("channels")
      .onSnapshot((snapshot) => {
        console.log("Channels: ", snapshot.docs);
        setChannels(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              name: doc.data().name,
            };
          })
        );
      });
  };

  useEffect(() => {
    getWorkspaces();
  }, []);

  const toggleWorkspaces = (e) => {
    setCurrentWorkspaceIndex(e.target.value);
    getChannels(workspaces[e.target.value].id);
    history.replace(`/workspaces/${workspaces[e.target.value].id}`);
  };

  return (
    <Container>
      <WorkspaceContainer>
        <FormControl>
          <Select
            style={{ color: "white" }}
            value={currentWorkspaceIndex}
            onChange={toggleWorkspaces}
          >
            {workspaces.map((workspace, index) => (
              <MenuItem value={index}>{workspace.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <AddWorkspaceDialog />
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
          <ChannelsTextContainer>
            {channelsCollapsed ? (
              <ArrowDropDownRoundedIcon
                onClick={() => {
                  setChannelsCollapsed(false);
                }}
              />
            ) : (
              <ArrowRightRoundedIcon
                onClick={() => {
                  setChannelsCollapsed(true);
                }}
              />
            )}
            Channels
          </ChannelsTextContainer>
          {workspaces.length !== 0 ? (
            <AddChannelDialog
              workspaceId={
                workspaces.length !== 0
                  ? workspaces[currentWorkspaceIndex].id
                  : ""
              }
            />
          ) : (
            <div></div>
          )}
        </NewChannelContainer>
        {channelsCollapsed ? (
          channels.length !== 0 ? (
            <ChannelsList>
              {channels.map((channel) => (
                <ChannelItem
                  onClick={() => {
                    goToChannel(channel.id);
                  }}
                >
                  # {channel.name}
                </ChannelItem>
              ))}
            </ChannelsList>
          ) : (
            <h5
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
                letterSpacing: "0.5px",
              }}
            >
              No Channels, Create One!
            </h5>
          )
        ) : (
          <span></span>
        )}
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
  height: calc(100vh + 10px);
  overflow-x: hidden;
  overflow-y: auto;
`;

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: grid;
  grid-template-columns: auto 50px;
  align-items: center;
  padding-left: 19px;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
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
  padding-left: 12px;
  padding-right: 12px;

  .MuiSvgIcon-root {
    cursor: pointer;
    transition: 0.25s ease;

    :hover {
      transform: scale(0.8);
    }
  }
`;

const ChannelsTextContainer = styled.span`
  display: flex;
  align-items: center;
`;

const ChannelsList = styled.div`
  padding-left: 19px;
`;

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
