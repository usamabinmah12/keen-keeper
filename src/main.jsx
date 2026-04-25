import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import Navbar from './components/Navbar'
import { RouterProvider } from 'react-router/dom'
import Layout from './components/Layout'
import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout></Layout> ,
    children : [
      {
         index :true,
         element : <h2>This home</h2>,
      },
      {
        path:"/timeline",
        element : "this  is timeline",
      },
      {
        path : "/stats",
        element : "This is stat"
      }
     

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>
  </StrictMode>
)
