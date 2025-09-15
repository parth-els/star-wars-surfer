import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { GrapheneRoot } from '@elsevier/graphene';
// import { GrapheneProvider } from '@elsevier/graphene';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GrapheneRoot>
      <App />
    </GrapheneRoot>
  </StrictMode>
)
