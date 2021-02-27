import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../../utils/firebase";
import Void from "../void/void";
import MemberItem from "./member_item/member_item";

function People() {
  const [members, setMembers] = useState([]);
  const { workspaceId } = useParams();

  const getMembersOfWorkspace = () => {
    db.collection("workspaces")
      .doc(workspaceId)
      .onSnapshot((snapshot) => {
        db.collection("users")
          .where("id", "in", snapshot.data().membersIds)
          .onSnapshot((snapshot) => {
            setMembers(
              snapshot.docs.map((doc) => {
                return {
                  id: doc.data().id,
                  email: doc.data().email,
                  name: doc.data().name,
                  photoUrl: doc.data().photoUrl,
                };
              })
            );
          });
      });
  };

  useEffect(() => {
    getMembersOfWorkspace();
  }, []);

  return (
    <Container>
      <MembersList>
        {members.length !== 0 ? (
          members.map((member, index) => <MemberItem member={member} />)
        ) : (
          <Void text={"No People"} />
        )}
      </MembersList>
    </Container>
  );
}

export default People;

const Container = styled.div``;

const MembersList = styled.div``;
