import { Page } from "@components/layout/Page";
import { PageProps } from "@type/Routing";
import React from "react";

type InterestsProps = PageProps

export function Interests( props: InterestsProps ): JSX.Element {
    const { id } = props;
    return (
        <Page id={ id } height="800px">Hello Interests page</Page>
    );
}