import { useMedia } from "@components/core";
import { useMemo } from "react";
import { useTheme } from "styled-components";
import { ScrollOffset } from "./types";

export function useCalculateScrollOffset(): ScrollOffset {
    const isMobile = useMedia( "tablet", "max" );
    const isDesktop = useMedia( "desktop", "min" );
    const isTablet = !isMobile && !isDesktop;

    const { sizes, spacings } = useTheme();
    const padding = parseFloat( spacings.padding1x ) * 10;
    const value = isMobile
        ? -( parseFloat( sizes.heightHeaderMobile ) * 10 + padding )
        : isTablet
            ? -( parseFloat( sizes.heightHeaderTablet ) * 10 + padding )
            : isDesktop
                ? -( parseFloat( sizes.heightHeaderTablet ) * 10 + padding )
                : 0;
    const offset = useMemo( () => ( {
        first: value,
        rest: -( parseFloat( sizes.heightHeaderSmall ) * 10 + padding )
    } ), [ value, padding, sizes ] );

    return offset;
}