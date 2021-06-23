import { Heading } from "@components/common";
import { Page } from "@components/layout/Page";
import { PageProps } from "@type/Routing";
import React from "react";

type InterestsProps = PageProps

export function Interests( props: InterestsProps ): JSX.Element {
    const { id } = props;
    return (
        <Page id={ id } height="800px">
            <Heading as="h2" isSticky>Hello Interests Page</Heading>
        </Page>
    );
}