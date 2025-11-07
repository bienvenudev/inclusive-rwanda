import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import WhyItMatters from './pages/WhyItMatters.tsx'
import QuickStart from './pages/QuickStart.tsx'
import Resources from './pages/Resources.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/why-it-matters',
        element: <WhyItMatters />,
      },
      {
        path: '/quick-start',
        element: <QuickStart />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
