import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./style";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <HashtagIcon>
          <img src="Public/Images/iconHashtag.png" alt="icon hasthtag" />
        </HashtagIcon>

        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon>
          <img src="Public/Images/add.png" alt="" />
        </InviteIcon>

        <SettingsIcon>
          <img src="Public/Images/settingWhite.png" alt="" />
        </SettingsIcon>
      </div>
    </Container>
  );
};

export default ChannelButton;

