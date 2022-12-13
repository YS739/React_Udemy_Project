import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "../Date/ExpenseDate";
import Card from "../card/Card";

const ExpenseItem = (props) => {
  const [name, setName] = useState(props.name);

  const clickHandler = () => {
    setName("Updated!");
    console.log(name);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
