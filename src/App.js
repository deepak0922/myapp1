import React from "react";

import Expenses from "./components/Expenses";
import "./index.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Chocolate",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 25000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 2100,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 7800,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Get Started"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2 className="start">Get Started</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
