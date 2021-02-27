import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";
import StyleProvider from "./context/style_context";
import { auth } from "./utils/firebase";
import { userKey } from "./utils/constants";
import SelectChannel from "./components/select_channel/select_channel";
import People from "./components/people/people";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(userKey)));

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem(userKey);
      setUser(null);
    });
  };

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
                <Sidebar user={user} />
                <Switch>
                  <Route path="/workspaces/:workspaceId/channels/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/workspaces/:workspaceId/people">
                    <People />
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
  grid-template-rows: 38px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
  overflow: hidden;
`;
