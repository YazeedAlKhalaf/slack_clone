import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";
import StyleProvider from "./context/style_context";
import db, { auth } from "./utils/firebase";
import { userKey } from "./utils/constants";
import SelectChannel from "./components/select_channel/select_channel";

function App() {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(userKey)));

  const getChannels = () => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            name: doc.data().name,
          };
        })
      );
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem(userKey);
      setUser(null);
    });
  };

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <StyleProvider>
      <div className="App">
        <Router>
          {!user ? (
            <Login setUser={setUser} />
          ) : (
            <Container>
              <Header user={user} signOut={signOut} />
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/">
                    <SelectChannel />
                  </Route>
                </Switch>
              </Main>
            </Container>
          )}
        </Router>
      </div>
    </StyleProvider>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
