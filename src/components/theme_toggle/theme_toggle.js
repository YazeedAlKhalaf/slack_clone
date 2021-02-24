import React, { useContext } from "react";
import styled from "styled-components";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { StyleContext } from "../../context/style_context";
import { darkThemeValue } from "../../utils/constants";

function ThemeToggle() {
  const { themeMode, toggleTheme } = useContext(StyleContext);

  return (
    <Container>
      <Toggle
        defaultChecked={themeMode === darkThemeValue}
        onChange={() => {
          toggleTheme();
        }}
        icons={{
          checked: <Dark>🌜</Dark>,
          unchecked: <Light>🌞</Light>,
        }}
      />
    </Container>
  );
}

export default ThemeToggle;

const Container = styled.div``;

const Dark = styled.span`
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  width: 10px;

  ::before {
    position: absolute;
  }
`;

const Light = styled.span`
  align-items: center;
  display: flex;
  height: 10px;
  justify-content: center;
  width: 10px;

  ::before {
    position: absolute;
  }
`;
