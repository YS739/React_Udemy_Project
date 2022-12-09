import "./Expenses.css";
import ExpenseItem from "../Item/ExpenseItem";

function Expenses({ itmes }) {
  return (
    <div>
      <ExpenseItem
        name={itmes[0].title}
        amount={itmes[0].amount}
        date={itmes[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={itmes[1].title}
        amount={itmes[1].amount}
        date={itmes[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={itmes[2].title}
        amount={itmes[2].amount}
        date={itmes[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={itmes[3].title}
        amount={itmes[3].amount}
        date={itmes[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
