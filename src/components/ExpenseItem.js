import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <h4>{props.date.toISOString()}</h4>
      <div className="expense-item_description">
        <h2>{props.name}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
