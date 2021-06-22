import React from "react";
import { Theme } from "@type/Theme";

export interface MediaQueryMap {
    mobile: MediaQueryList;
    tablet: MediaQueryList;
    desktop: MediaQueryList;
}

export type QueryKeys = keyof MediaQueryMap;
export type QueryKeyValueTuple = [ QueryKeys, string ];
export type QueryKeyValuePairs = QueryKeyValueTuple[];

export interface StyledProviderProps {
    readonly children: React.ReactNode;
    readonly theme: Theme;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StyledProviderContextValue {}
