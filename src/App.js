import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Container, Content, Title } from "./common/Container";
import { Navigation } from "./common/Navigation";
import { Tile } from "./common/Tile";
import { Pagination } from "./common/Pagination";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Navigation />
      
      <Container>
        <Title>Popular movies</Title>
        <Content>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
        </Content>
      </Container>
      <Pagination />
    </>
  );
}

export default App;
