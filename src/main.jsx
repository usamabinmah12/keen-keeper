import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import Navbar from './components/Navbar'
import { RouterProvider } from 'react-router/dom'
import Layout from './components/Layout'
import { createBrowserRouter } from 'react-router'
import Homepage from './Homepage'
import Friend from './components/Friend'
import Details from './Details'
import ContextProvider from './ContextProvider'
import Timeline from './Timeline'
import { ToastContainer } from 'react-toastify'
import Stat from './Stat'
import Error from './Error'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Layout></Layout> ,
    children : [
      {
         index :true,
         element : <Homepage></Homepage>,
         loader : () => fetch("/data.json"),
      },
      {
        path : "/details/:id",
        element: <Details></Details>,
        loader : () => fetch("/data.json"),
      },
      {
        path:"/timeline",
        element : <Timeline></Timeline>,
      },
      
      {
        path : "/stat",
        element : <Stat></Stat>,
      }
     

    ],
    errorElement: <Error></Error>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
        <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
    
      
    <ToastContainer />
  </StrictMode>
)
