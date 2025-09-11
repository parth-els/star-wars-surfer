import './App.css'
import React from 'react'

import { PageLayout } from "@elsevier/graphene";  
import Header from './components/HeaderComp';
import Footer from './components/FooterComp';

// HeaderDocumentation, ContentDocumentation and FooterDocumentation are custom components

export default function App() {
  return (
    <>
    <PageLayout
              header={<Header/>}
              footer={<Footer />}
              sections={[
                {
                  id: 'content',
                  content: <>Cont</>,
                  layout: 'narrow',
                },
              ]}
            />
    </>
            );
}
