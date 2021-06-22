import { useCallback, useEffect, useMemo, useState } from "react";
import { throttle } from "lodash-es";

export function getRootElement(): HTMLElement {
    let node = document.getElementById( "root" );
    if ( !node ) {
        node = document.createElement( "div" );
        node.setAttribute( "id", "root" );
        document.body.appendChild( node );
    }
    return node;
}

export function getPortalElementById( id: string ): HTMLElement {
    let node = document.getElementById( id );
    if ( !node ) {
        node = document.createElement( "div" );
        node.setAttribute( "id", id );
        document.body.appendChild( node );
    }
    return node;
}

export function scrollWithOffset( el: HTMLElement, offset = 0 ): void {
    const { top } = el.getBoundingClientRect();
    const yCoordinate = top + window.pageYOffset;
    window.scrollTo( {
        top: yCoordinate + offset,
        behavior: "smooth"
    } );
}

type Directions =
    | "none"
    | "up"
    | "right"
    | "down"
    | "left";

interface Scroll {
    readonly y: number;
    readonly x: number;
    readonly direction: Directions;
}

export const useScroll = ( time = 0 ): Scroll => {

    const getScrollOffset = useCallback(
        ( direction: "y" | "x" ) => {
            return direction === "y" ? window.pageYOffset : window.pageXOffset;
        },
        []
    );
    const getDirection = useCallback(
        ( { y, x }: Scroll ): Directions => {
            const yOffset = getScrollOffset( "y" );
            const xOffset = getScrollOffset( "x" );

            if (
                y !== undefined &&
                x !== undefined &&
                yOffset !== undefined &&
                xOffset !== undefined
            ) {
                if ( y > yOffset ) return "up";
                if ( y < yOffset ) return "down";
                if ( x > xOffset ) return "left";
                if ( x < xOffset ) return "right";
            }
            return "none";
        },
        [ getScrollOffset ]
    );

    const scrollFunc = useCallback( () => {
        const yOffset = getScrollOffset( "y" );
        const xOffset = getScrollOffset( "x" );

        setScroll( ( prev: Scroll ): Scroll => ( {
            y: yOffset,
            x: xOffset,
            direction: getDirection( prev )
        } ) );
    }, [ getScrollOffset, getDirection ] );


    const [ scroll, setScroll ] = useState<Scroll>( {
        y: getScrollOffset( "y" ),
        x: getScrollOffset( "x" ),
        direction: "none"
    } );

    const handleScroll: () => void = useMemo(
        () => {
            if( time > 0 ) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                return throttle( (): void => scrollFunc(), time ) as () => void;
            }
            return scrollFunc;
        },
        [ time, scrollFunc ]
    );

    useEffect( () => {
        window.addEventListener( "scroll", handleScroll )
        return () => window.removeEventListener( "scroll", handleScroll );
    }, [ handleScroll ] )

    return scroll;
};