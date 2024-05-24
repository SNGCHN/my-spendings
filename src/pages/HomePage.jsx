import { useState } from "react";
import InputForm from "../components/InputForm";
import MonthSelect from "../components/MonthSelect";
import SpendingItem from "../components/SpendingItem";

const HomePage = ({ spending, setSpending, selectedMonth, setSelectedMonth }) => {
  const addSpending = (newSpending) => {
    setSpending([...spending, newSpending]);
  };
  console.log(spending);
  console.log(selectedMonth);
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
