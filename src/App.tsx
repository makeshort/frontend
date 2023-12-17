import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import Register from "./pages/Register/Register.tsx";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";
import './App.css';
import Login from "./pages/Login/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contacts",
                element: <Contacts />,
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
