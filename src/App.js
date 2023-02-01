import React from "react";

import { Container, H1, P } from './styles';

const App = () => {

  const hello = "Hello React";

  return (
  <Container>
    <H1 >{hello}</H1>
    <P>Esse é meu parágrafo </P>
    <P>Esse é meu outro parágrafo</P>
  </Container>
  );

}

export default App