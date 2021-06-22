import { Box } from "@components/layout";
import { scrollWithOffset } from "@utils/dom";
import React from "react";
import { HashLink } from "react-router-hash-link";
import { NaviItem, NaviList } from "./styled";
import { useCalculateScrollOffset } from "./utils";

export function Navigation(): JSX.Element {
    const { first, rest } = useCalculateScrollOffset();
    return (
        <Box as="nav" width="fit-content" height="fit-content">
            <NaviList>
                <NaviItem><HashLink to="/home#top" scroll={ el => scrollWithOffset( el, first ) }>Home</HashLink></NaviItem>
                <NaviItem><HashLink to="/home#resume" scroll={ el => scrollWithOffset( el, rest ) }>Resume</HashLink></NaviItem>
                <NaviItem><HashLink to="/home#skills" scroll={ el => scrollWithOffset( el, rest ) }>Skills</HashLink></NaviItem>
                <NaviItem><HashLink to="/home#interests" scroll={ el => scrollWithOffset( el, rest ) }>Interests</HashLink></NaviItem>
            </NaviList>
        </Box>
    );
}