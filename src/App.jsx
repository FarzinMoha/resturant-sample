import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Loading from "./components/loading/Loaing.component";
const Home = lazy(() => import("./routes/home/Home.component"));
const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;