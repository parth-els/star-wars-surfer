import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PageLayout } from "@elsevier/graphene";  

import Header from './components/HeaderComp';
import Footer from './components/FooterComp';
import Hero from './pages/Hero';
import Films from './pages/Films';

export default function App() {
  return (
    <Router>
      <PageLayout
        header={<Header />}
        footer={<Footer />}
        sections={[
          {
            id: 'content',
            content: (
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/people" element={<Hero />} />
                <Route path="/films" element={<Films />} />
                <Route path="*" element={<h2>404 - Page Not Found</h2>} />
              </Routes>
            ),
            layout: 'narrow',
          },
        ]}
      />
    </Router>
  );
}
