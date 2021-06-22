import { useScroll } from "@utils/dom";
import React, { useEffect, useState } from "react";
import { StyledHeader } from "./styled";
import { HeaderProps } from "./types";

const scrollThreshold = 80;
export function Header( props: HeaderProps ): JSX.Element {
    const {
        children,
        order,
    } = props;

    const scroll = useScroll( 50 );
    const [ shouldShrink, setShouldShrink ] = useState( false );

    useEffect( () => {
        const status = scroll.y > scrollThreshold;
        if( shouldShrink !== status ) {
            setShouldShrink( status );
        }
    }, [ shouldShrink, scroll ] );

    return (
        <StyledHeader
            forwardedAs="header"
            order={ order }
            shouldShrink={ shouldShrink }
        >
            { children }
        </StyledHeader>
    );
}