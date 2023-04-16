import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Tasks from "./pages/Tasks";
import Map from "./pages/Map";
import Problems from "./pages/Problems";
import Summary from "./pages/Summary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Tasks /> },
        { path: "map", element: <Map /> },
        { path: "problems", element: <Problems /> },
        { path: "summary", element: <Summary /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
