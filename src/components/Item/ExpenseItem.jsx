import ExpenseDate from "../Date/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../card/Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.name}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
