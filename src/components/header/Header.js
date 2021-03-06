import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ThemeToggle from "../theme_toggle/theme_toggle";

function Header({ user, signOut }) {
  return (
    <Container>
      <ThemeToggle />
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage
          onClick={() => {
            signOut();
          }}
        >
          <img
            src={user.photoUrl || "https://i.imgur.com/6VBx3io.png"}
            alt="user_image"
          />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: ${({ theme }) => theme.headerBgColor};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin-right: 16px;
  margin-left: 16px;

  .MuiSvgIcon-root {
    transition: 0.25s ease;

    :hover {
      transform: scale(0.8);
    }
  }
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin-right: 16px;
  margin-left: 16px;
`;

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 10%);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input::placeholder {
    color: white;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: felx;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;
