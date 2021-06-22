import { Page } from "@components/layout/Page";
import { PageProps } from "@type/Routing";
import React from "react";

type ResumeProps = PageProps

export function Resume( props: ResumeProps ): JSX.Element {
    const { id } = props;
    return (
        <Page id={ id } height="800px">Hello Resume page</Page>
    );
}