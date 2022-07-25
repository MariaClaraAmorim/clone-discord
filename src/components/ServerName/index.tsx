import React from 'react';

import { Container, Title, ExpandIcon} from './style';

const ServerName: React.FC = () => {
  return (
    <Container>

      <Title>Servidor da Maria</Title>
      
      <ExpandIcon>
        <img src="Public/Images/Vector.png" alt="" />
      </ExpandIcon>
    </Container>
  );
};

export default ServerName;