import React from "react";
import styled from "styled-components";
import db, { auth, provider } from "../../utils/firebase";
import { userKey } from "../../utils/constants";
import slackImage from "../../assets/slack_image.png";
import firebase from "firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((userCredntial) => {
        const newUser = {
          id: userCredntial.user.uid,
          name: userCredntial.user.displayName,
          photoUrl: userCredntial.user.photoURL,
          email: userCredntial.user.email,
        };
        setUser(newUser);
        localStorage.setItem(userKey, JSON.stringify(newUser));
        db.collection("users")
          .doc(newUser.id)
          .get()
          .then((result) => {
            if (!result.exists) {
              db.collection("users").doc(newUser.id).set(newUser);
              const docRefWorkspace = db.collection("workspaces").doc();
              docRefWorkspace.set({
                id: docRefWorkspace.id,
                name: newUser.name,
                membersIds: [newUser.id],
              });
            }
          });

        db.collection("workspaces")
          .doc("everyone")
          .update({
            membersIds: firebase.firestore.FieldValue.arrayUnion(newUser.id),
          })
          .then(() => {});
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImage src={slackImage}></SlackImage>
        <h1>Hi 👋</h1>
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
  background-image: url("https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?cs=srgb&dl=pexels-scott-webb-430205.jpg&fm=jpg");
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
