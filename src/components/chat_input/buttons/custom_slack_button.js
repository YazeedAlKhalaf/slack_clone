import React from "react";
import styled from "styled-components";

function CustomSlackButton({ icon }) {
  return <Container>{icon}</Container>;
}

export default CustomSlackButton;

const Container = styled.div`
  border-radius: 5px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.25s ease;

  :hover {
    transform: scale(0.9);
    background: #1f64a0;
    color: white;
  }

  .MuiSvgIcon-root {
    width: 18px;
  }
`;
