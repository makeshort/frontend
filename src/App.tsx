import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import About from "./pages/About/About.tsx";
import Home from "./pages/Home/Home.tsx";
import './App.css';

const router = createBrowserRouter([
    {
        path: "/",
        // element: <Navbar />,
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
