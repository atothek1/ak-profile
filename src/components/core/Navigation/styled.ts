import styled from "styled-components";
import { listReset } from "@utils/styled";


export const NaviList = styled.ul`
  ${ listReset() };
  display: flex;
`;

export const NaviItem = styled.li`;
  padding: 0 ${ ( { theme } ) => ( theme.spacings.padding1x ) };
`;