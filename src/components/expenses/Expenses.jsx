import "./Expenses.css";
import ExpenseItem from "../Item/ExpenseItem";
// import Card from "../card/Card";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        name={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
