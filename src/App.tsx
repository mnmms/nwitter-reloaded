import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./routes/Home.tsx";
import Profile from "./routes/Profile.tsx";
import Login from "./routes/Login.tsx";
import CreateAccount from "./routes/CreateAccount.tsx";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen.tsx";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "profile", element: <Profile /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    background: black;
    color:white;
  }
`;

function App() {
  const [isLoading, setLoading] = useState(true);

  const init = async () => {
    // wait for firebase
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
