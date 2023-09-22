import React, { lazy } from "react";

//css import
import "./budhistory.css";

const BudHistory = ({ expense, Budgets }) => {

  return (
    <div className="Budget-history-container reveal" loading='lazy'>
      <table border='1' cellspacing="0" cellpadding='10'>
        <thead>
          <tr>
            <th>Expense Name</th>
            <th>Budget Name</th>
            <th>Expense Amount</th>
            <th>Budget Amount</th>
            <th>Remaining Amount</th>
          </tr>
        </thead>
        <tbody>
          {expense.map((exp, index) => {
            const filter = Budgets.filter(
              (budg) => budg.id === Number(exp.budgetid)
            );
            if (filter.length > 0) {
              return (
                <tr key={index}>
                  <td>{exp.newexpense}</td>
                  <td><div className="btn">{filter[0].newbudget}</div></td>
                  <td>{Number(exp.expenseAmount)}</td>
                  <td>{Number(filter[0].budgetamount)}</td>
                  <td>
                    {Number(filter[0].budgetamount) - filter[0].spend}
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BudHistory;
