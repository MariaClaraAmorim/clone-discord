import styled from "styled-components";
import {
  MdHeadphones,
  BsFillMicFill,
  AiOutlineSetting,
} from "../../styles/Icons";

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: var(--quaternary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: column;
  > strong {
    color: var(--white);
    font-size: 13px;
    display: block;
  }
  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(BsFillMicFill)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(MdHeadphones)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(AiOutlineSetting)`
  width: 20px;
  height: 20px;
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

export const Imagem = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

// style=" width: 32px;height: 32px;border-radius: 50%;"
