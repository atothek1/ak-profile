import { HeadingAllowedAsValues } from "@components/common";
import { StyledHeadingProps } from "@components/common/Heading/types";
import { Text } from "../Text";
import styled from "styled-components";

const fontSizeMultiplierMatrix: Record<HeadingAllowedAsValues, number> = {
    h1: 1.5,
    h2: 1.3,
    h3: 1.2,
    h4: 1,
    h5: 1,
    h6: 1
};
export const StyledHeading = styled( Text )<StyledHeadingProps>`
    height: fit-content;
    ${ props => ( props.isSticky ? "position: sticky; top: 40px;" : "" ) }
    font-weight: ${ props => props.theme.typo.fontWeightBold };
    font-size: calc(${ props => `${ props.theme.typo.fontSize } * ${ fontSizeMultiplierMatrix[ props.as! ] }` });
`;