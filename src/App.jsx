import { createBrowserRouter } from "react-router-dom"
import Body from "./components/body/Body"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import SignIn from "./components/header/SignIn"
import Cart from "./components/header/Cart"
import { Outlet } from "react-router-dom"
import RestaurantMenu from "./components/body/restaurant-menu/RestaurantMenu"
import Error from "./components/body/Error"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<Error />,
    children:[
      {
        path:"/signin",
        element:<SignIn />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/restaurants/:id",
        element:<RestaurantMenu />
      }
    ]
  },
  
])

export default AppRouter
