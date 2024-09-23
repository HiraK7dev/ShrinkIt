import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './utils/ProtectedRoutes'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <RouterProvider router={router}/>
    </NextUIProvider>
  </StrictMode>,
)
