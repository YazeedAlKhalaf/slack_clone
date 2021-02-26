import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "../chat_input/chat_input";
import ChatMessage from "../chat_message/chat_message";
import db from "../../utils/firebase";
import { useParams } from "react-router-dom";
import firebase from "firebase";
import Void from "../void/void";

function Chat({ user }) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);

  const getChannel = () => {
    db.collection("rooms")
      .doc(channelId)
      .onSnapshot((snapshot) => {
        setChannel(snapshot.data());
        console.log(snapshot.data());
      });
  };

  const sendMessage = (text) => {
    if (text) {
      const payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photoUrl,
      };

      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  const getMessages = () => {
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        let messages = snapshot.docs.map((doc) => doc.data());
        console.log(messages);
        setMessages(messages);
      });
  };

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId]);

  return (
    <Container>
      <ChatHeader>
        <LeftHeaderPart>
          <ChannelName>
            # {channel && channel.name}
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
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <ChatMessage
              text={message.text}
              name={message.user}
              image={message.userImage}
              timestamp={message.timestamp}
            />
          ))
        ) : (
          <Void text={"No Messages"} />
        )}
      </MessageContainer>

      <ChatInput sendMessage={sendMessage}></ChatInput>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 65px calc(100vh - 230px) min-content;
  min-height: 0;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 16px;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
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
    transform: scale(0.7);
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
  transition: 0.25s ease;

  :hover {
    background: #dcdcdc;
    transform: scale(0.8);
  }

  p {
    padding-right: 5px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: center;
`;
