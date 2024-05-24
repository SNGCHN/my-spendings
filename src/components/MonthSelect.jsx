import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { SpendingContext } from "../context/SpendingContext";

const MONTHS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MonthSelect = () => {
  const { selectedMonth, setSelectedMonth } = useContext(SpendingContext);
  const handleSetMonth = (month) => {
    setSelectedMonth(month);
  };

  return (
    <ButtonWrapper>
      {MONTHS.map((month, index) => (
        <MonthButton
          $active={selectedMonth === month}
          onClick={() => {
            handleSetMonth(month);
          }}
          key={index}
        >
          {month}월
        </MonthButton>
      ))}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
`;

const MonthButton = styled.button`
  font-size: 15px;
  padding: 20px;
  height: 60px;
  background-color: ${(props) => (props.$active ? "red" : "white")};
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default MonthSelect;
