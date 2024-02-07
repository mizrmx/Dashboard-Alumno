import { useMemo } from "react";
import "./Expenses.css";

const Expenses = ({ expenseYear, expensesBackgroundColor, expensesColor }) => {
  const expensesStyle = useMemo(() => {
    return {
      backgroundColor: expensesBackgroundColor,
    };
  }, [expensesBackgroundColor]);

  const expenses1Style = useMemo(() => {
    return {
      color: expensesColor,
    };
  }, [expensesColor]);

  return (
    <div className="expenses" style={expensesStyle}>
      <div className="expenses1" style={expenses1Style}>
        {expenseYear}
      </div>
    </div>
  );
};

export default Expenses;
