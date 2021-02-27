import React from "react";
import styled from "styled-components";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";

function MemberItem({ member, inviteBlock = false }) {
  return inviteBlock ? (
    <Container>
      <MemberInvite />
      <MemberName>Invite</MemberName>
    </Container>
  ) : (
    <Container>
      <MemberImage src={member.photoUrl} />
      <MemberName>{member.name}</MemberName>
    </Container>
  );
}

export default MemberItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  width: 100%;
  transition: 0.25s ease;
  cursor: pointer;

  :hover {
    background: ${({ theme }) => theme.chatMessageHoverBgColor};
  }
`;

const MemberImage = styled.img`
  border-radius: 50%;
  width: 75px;
`;

const MemberName = styled.h4`
  margin-left: 15px;
`;

const MemberInvite = styled(GroupAddRoundedIcon)``;
