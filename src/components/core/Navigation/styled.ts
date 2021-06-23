import styled from "styled-components";
import { listReset } from "@utils/styled";


export const NaviList = styled.ul`
  ${ listReset() };
  display: flex;
`;

export const NaviItem = styled.li`;
  padding: 0 ${ ( { theme } ) => ( theme.spacings.padding1x ) };
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;