import React from "react";
import styled from "styled-components";
import { auth, provider } from "../../utils/firebase";
import { userKey } from "../../utils/constants";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((userCredntial) => {
        const newUser = {
          name: userCredntial.user.displayName,
          photoUrl: userCredntial.user.photoURL,
          email: userCredntial.user.email,
        };
        setUser(newUser);
        localStorage.setItem(userKey, JSON.stringify(newUser));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImage src="http://assets.stickpng.com/images/5cb480b85f1b6d3fbadece78.png"></SlackImage>
        <h1>Sign in Slack</h1>
        <SignInButton
          onClick={() => {
            signIn();
          }}
        >
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: ${({ theme }) => theme.body};
  padding: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

const SlackImage = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
`;
