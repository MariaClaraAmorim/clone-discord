import styled from "styled-components";
import { BsHash } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  grid-area: CI;
  align-items: center;
  padding: 0 17px;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;
`;
export const HashtagIcon = styled(BsHash)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
`;

export const Title = styled.div`
  margin-left: 9px;
  font-size: 16px;
  font-weight: bold;
  color: var(--white);
`;

export const Separator = styled.div`
  height: 24px;
  width: 1px;
  background-color: var(--white);
  opacity: 0.2;
  margin: 0 13px;
`;

export const Description = styled.div`
  font-size: 15px;
  color: var(--gray);
`;
