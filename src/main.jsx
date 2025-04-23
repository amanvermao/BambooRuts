import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SocialMedia from './components/pages/SocialMedia/index.jsx';
import LandingPage from './components/LandingPage.jsx';
import PhotoShoot from './components/pages/PhotoShoot/index.jsx';
import PerformanceMarketing from './components/pages/PMarketing/index.jsx';
import ContentMarketing from './components/pages/ContentMarketing/index.jsx';
import Website from './components/pages/Website/index.jsx';



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage/>,
      },
      {
        path: "/socialmedia",
        element: <SocialMedia/>,
      },
      {
        path: "/photoshoot",
        element: <PhotoShoot/>,
      },
      {
        path: "/contentmarketing",
        element: <ContentMarketing/>,
      },
      {
        path: "/performancemarketing",
        element: <PerformanceMarketing/>,
      },
      {
        path: "/website",
        element: <Website/>,
      },
      
    ],
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
