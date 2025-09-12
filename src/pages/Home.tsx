import React from 'react'

import { PageLayout } from "@elsevier/graphene";
import Header from '../components/HeaderComp';
import Footer from '../components/FooterComp';
import Hero from '../pages/Hero';

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
                    content: <Hero/>,
                    layout: 'narrow',
                },
            ]}
        />
    </>);
}