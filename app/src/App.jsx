import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Tasks from "./pages/Tasks";
import Homepage from "./pages/Homepage";
import Settings from "./pages/Settings";
import Problems from "./pages/Problems";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "homepage", element: <Homepage /> },
        { path: "tasks", element: <Tasks /> },
        { path: "settings", element: <Settings /> },
        { path: "problems", element: <Problems /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
