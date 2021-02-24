import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import styled from "styled-components";
import StyleProvider from "./context/style_context";
import db from "./utils/firebase";

function App() {
  const [rooms, setRooms] = useState([]);

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

  useEffect(() => {
    getChannels();
  }, []);

  console.log(rooms);

  return (
    <StyleProvider>
      <div className="App">
        <Router>
          <Container>
            <Header />
            <Main>
              <Sidebar rooms={rooms} />
              <Switch>
                <Route path="/room">
                  <Chat />
                </Route>
                <Route path="/">
                  <Login />
                </Route>
              </Switch>
            </Main>
          </Container>
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
