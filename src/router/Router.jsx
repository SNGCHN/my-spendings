import { useState } from "react";
import HomePage from "../pages/HomePage";
import Detail from "../pages/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  const [spending, setSpending] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(1);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage spending={spending} setSpending={setSpending} selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />} />
        <Route path='/detail/:detailId' element={<Detail spending={spending} setSpending={setSpending} setSelectedMonth={setSelectedMonth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
