import { Breakpoints } from "@type/Theme";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components";

type MinMax = "min" | "max";

export function useMedia( breakpointName: keyof Breakpoints, minMax: MinMax = "min" ): boolean {
    const theme = useTheme();
    const breakpoint = theme.breakpoints[ breakpointName ];
    const mql = useMemo( () => window.matchMedia( `(${ minMax }-width: ${ breakpoint })` ), [ minMax, breakpoint ] );
    const [ state, setState ] = useState( mql.matches );

    const handler = useCallback( ( evt: MediaQueryListEvent ) => {
        setState( evt.matches );
    }, [] );

    useEffect( () => {
        mql.addEventListener( "change", handler );
        return () => mql.removeEventListener( "change", handler );
    }, [ handler, mql ] );

    return state;
}