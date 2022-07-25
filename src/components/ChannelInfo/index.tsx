import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './style';

const ChannelInfo: React.FC = () => {
  return (
    <Container>

      <HashtagIcon>
      <img src="../src/assets/#.png" alt="" />
      </HashtagIcon>

      <Title>Chat-livre</Title>
      
      <Separator/>

      <Description>Canal aberto para conversas</Description>
        
    </Container>
  );
};

export default ChannelInfo;
