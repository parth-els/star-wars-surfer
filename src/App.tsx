import './App.css'
import React from 'react'

import { PageLayout } from "@elsevier/graphene";  
import Header from './components/HeaderComp';
import Footer from './components/FooterComp';
import Hero from './pages/Hero';
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
                  content: <Hero/>,
                  layout: 'narrow',
                },
              ]}
            />
    </>
            );
}
