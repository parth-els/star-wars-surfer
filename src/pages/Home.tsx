import React from 'react'

import { PageLayout } from "@elsevier/graphene";
import Header from '../components/HeaderComp';
import Footer from '../components/FooterComp';

// HeaderDocumentation, ContentDocumentation and FooterDocumentation are custom components
// TEST COMP
export default function Home() {
    return (<>

        <PageLayout
            header={<Header />}
            footer={<Footer />}
            sections={[
                {
                    id: 'content',
                    content: <>Cont</>,
                    layout: 'narrow',
                },
            ]}
        />
    </>);
}