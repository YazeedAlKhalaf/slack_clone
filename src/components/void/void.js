import React from "react";
import styled from "styled-components";
import VoidImageSVG from "../../assets/void.svg";

function Void({ text }) {
  return (
    <Container>
      <VoidImage src={VoidImageSVG} />
      <VoidText>
        <h2>{text}</h2>
      </VoidText>
    </Container>
  );
}

export default Void;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VoidImage = styled.img`
  height: 200px;
`;

const VoidText = styled.div`
  margin-top: 25px;
`;
