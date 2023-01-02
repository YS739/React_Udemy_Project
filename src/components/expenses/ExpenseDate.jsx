import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString().slice(6, 7);
  const day = props.date.toLocaleString().slice(9, 11);
  const year = props.date.toLocaleString().slice(0, 4);

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
