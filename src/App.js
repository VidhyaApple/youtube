import "./App.css";
import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import VideoSearchTextContext from "./utils/VideoSearchTextContext";
import  Demo  from "./components/Demo";
/*
Header
Body
 - Sidebar
 - MainContainer
   - ButtonList
   - VideoContainer
     - VideoCard

*/

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
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
      path: "/demo",
      element: <Demo />,
    },
  ],
}]);

function App() {

  const [searchTextQuery,setVideoSearchText] = useState();
  return (
    <Provider store={store}>
      <VideoSearchTextContext.Provider value={{searchText:searchTextQuery, setVideoSearchText}}>
      <Header/>
      <RouterProvider router={appRouter} />
      </VideoSearchTextContext.Provider>
    </Provider>
  );
}

export default App;
