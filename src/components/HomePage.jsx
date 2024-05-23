import React, { useState } from "react";
import InputForm from "./InputForm";
import MonthSelect from "./MonthSelect";
import SpendingItem from "./SpendingItem";

const HomePage = () => {
  const [spending, setSpending] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState(1);

  const addSpending = (newSpending) => {
    setSpending([...spending, newSpending]);
  };
  return (
    <>
      <div className='container'>
        <InputForm addSpending={addSpending} setSelectedMonth={setSelectedMonth} />
        <MonthSelect selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
        <SpendingItem spending={spending} selectedMonth={selectedMonth} />
      </div>
    </>
  );
};

export default HomePage;
