import React from "react";
import People from "./assets/People.png"
import Arrow from "./assets/arrow.png"


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from "./styles";

const App = () => {

  const users = [
    { id: Math.random(), name: 'Rodrigo', age: 33 },
    { id: Math.random(), name: 'Maria', age: 21 },
  ];


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="seta" src={Arrow} /> </Button>

        <ul>
          {users.map((user) => (

            < li key={user.id}>
              {user.name} - {user.age}
            </li>

          ))}

        </ul>

      </ContainerItens>

    </Container>
  );

}

export default App