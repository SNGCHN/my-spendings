import { useState } from "react";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpendingContext } from "../context/SpendingContext";

function Router() {
  const [spending, setSpending] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);

  return (
    <SpendingContext.Provider value={{ spending, setSpending, selectedMonth, setSelectedMonth }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </SpendingContext.Provider>
  );
}

export default Router;
