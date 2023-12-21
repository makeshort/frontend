import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Register from "./pages/Register/Register.tsx";
import Home from "./pages/Home/Home.tsx";
import './App.css';
import Login from "./pages/Login/Login.tsx";
import Rate from "./pages/Rate/Rate.tsx";
import Urls from "./pages/Urls/Urls.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "urls",
                element: <Urls />,
            },
            {
                path: "rate",
                element: <Rate />,
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
