import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import About from './pages/About.tsx';
import Skills from './pages/Skills.tsx';
import Contact from './pages/Contact.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Skills',
    element: <Skills />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
