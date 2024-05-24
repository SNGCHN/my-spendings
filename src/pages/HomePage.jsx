import { useContext } from "react";
import InputForm from "../components/InputForm";
import MonthSelect from "../components/MonthSelect";
import SpendingItem from "../components/SpendingItem";
import { SpendingContext } from "../context/SpendingContext";

const HomePage = () => {
  const { setSpending } = useContext(SpendingContext);
  const addSpending = (newSpending) => {
    setSpending((prev) => [...prev, newSpending]);
  };
  return (
    <div className='container'>
      <InputForm addSpending={addSpending} />
      <MonthSelect />
      <SpendingItem />
    </div>
  );
};

export default HomePage;
