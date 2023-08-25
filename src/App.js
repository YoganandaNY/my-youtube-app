import { Provider } from "react-redux";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchVideoContainer from "./components/SearchVideoContainer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./firebase_setup/AuthContext";

const appRouter = createBrowserRouter([
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <>
          <Head />,
          <Body />,
        </>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/search",
        element: <SearchVideoContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AuthProvider>
          <RouterProvider router={appRouter} />
          <Outlet />
        </AuthProvider>
      </div>
    </Provider>
  );
}

export default App;
