import { Page } from "@components/layout/Page";
import { PageProps } from "@type/Routing";
import React from "react";

type SkillsProps = PageProps

export function Skills( props: SkillsProps ): JSX.Element {
    const { id } = props;
    return (
        <Page id={ id } height="800px">Hello Skills page</Page>
    );
}