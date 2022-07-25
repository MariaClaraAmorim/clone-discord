import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
} from "./style";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar/> 
        <UserData>
          <strong>Maria Clara Amorim</strong>
          <span>#2689</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon>
          <img src="Public/Images/microfone.png" alt="" />
        </MicIcon>

        <HeadphoneIcon>
          <img src="Public/Images/fone.png" alt="" />
        </HeadphoneIcon>

        <SettingsIcon>
          <img src="Public/Images/settings.png" alt="" />
        </SettingsIcon>
      </Icons>
    </Container>
  );
};

export default UserInfo;

