import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../../utils/firebase";
import Void from "../void/void";
import MemberItem from "./member_item/member_item";
import SearchUsers from "../search_users/search_users";

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
        <SearchUsers
          existingMembersIdsList={members.map((member) => member.id)}
          openCloseComponent={<MemberItem inviteBlock={true} />}
        />
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

const SearchUsersContainer = styled.div`
  padding: 0px 50px;
  position: absolute;
  // top: calc(100vh / 2.2);
  // left: calc(100vw / 2.2);
  height: calc(100vh - 38px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000b3;
`;
