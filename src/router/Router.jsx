import { useState } from "react";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpendingContext } from "../context/SpendingContext";

function Router() {
  // const [spending, setSpending] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
