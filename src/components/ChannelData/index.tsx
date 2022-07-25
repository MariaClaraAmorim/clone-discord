import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input } from "./style";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Guilherme Rodz"
            date="31/05/2022"
            content="Hoje é o meu aniversário!"
          />
        ))}

        <ChannelMessage
          author="Diego Fernandes"
          date="31/05/2022"
          content={
            <>
              <Mention>@Maria Clara Amorim</Mention>, me carrega no LoL e CS de
              novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />

      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
