import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProtectedRoutes from './utils/ProtectedRoutes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes/>,
    children: [
      {
        path: '',
        element: <Home/>
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
