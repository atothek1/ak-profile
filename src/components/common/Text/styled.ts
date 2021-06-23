import { textNormal, textNormalBold } from "@utils/styled";
import styled from "styled-components";
import { StyledTextProps } from "./types";

export const StyledText = styled.span<StyledTextProps>`
  ${ ( { bold, color } ) => ( bold ? textNormalBold( color ) : textNormal( color ) ) };
`;