import React from "react";
import styled from "styled-components";
import SelectChannelSVG from "../../assets/select_channel.svg";
import AddChannelDialog from "../sidebar/add_channel_dialog/add_channel_dialog";

function SelectChannel() {
  return (
    <Container>
      <SelectChannelImage src={SelectChannelSVG} />
      <SelectChannelText>
        <h2>Select or Create Channel</h2>
      </SelectChannelText>
      <AddChannelDialog size={3.0} />
    </Container>
  );
}

export default SelectChannel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectChannelImage = styled.img`
  height: 200px;
`;

const SelectChannelText = styled.div`
  margin-top: 25px;
  margin-bottom: 50px;
`;
