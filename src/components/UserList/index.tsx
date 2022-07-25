import React from "react";

import { Container, Role, User, Avatar } from "./style";


interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
     
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 3 </Role>
      <UserRow nickname="Fhellipy Santana" />

      <UserRow nickname="Vitória Montino" />

      <UserRow nickname="Eduardo Henrique" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />
      <UserRow nickname="André Neres" />
      <UserRow nickname="Fernando Rangel" />
      <UserRow nickname="Philipe Matheus" />
      <UserRow nickname="Lucas Rego" />
      <UserRow nickname="Flavia Rodrigues" />
      <UserRow nickname="Felipe Silva" />
      <UserRow nickname="Gyovanna Lacerda" />
      <UserRow nickname="Fernanda Kelle" />
      <UserRow nickname="Elaine Laumy" />
      <UserRow nickname="Katrielle Pereira" />
      <UserRow nickname="Kauan Augusto" />
      <UserRow nickname="Beatriz Lorena" />
    </Container>
  );
};

export default UserList;
