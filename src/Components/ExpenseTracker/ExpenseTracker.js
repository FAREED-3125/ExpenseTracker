import React, { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";
//icons import
import { GiPayMoney } from "react-icons/gi";


//css import 
import './expensetracker.css'

const ExpenseTracker = ({ Budgets }) => {
  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting";
  const form = useRef();
  const expenseInput = useRef();

  useEffect(()=>{
    form.current.reset();
    expenseInput.current.focus()
  },[isSubmiting])
  return (
   <> <div className="expense-tracker-container dottedborder-box ">
      <h3>
        Add{" "}
        {Budgets.length === 1 ? (
          <span className="accent">{Budgets[0].newbudget}</span>
        ) : (
          <>Your</>
        )}
        , <span className={Budgets.length === 1 ? "" : "accent"}>Expense</span>{" "}
      </h3>
      <fetcher.Form ref={form} className="expense-form" method="post">
        <input type="hidden" name="_action" value="createnew" />

        <input
          ref={expenseInput}
          type="text"
          name="newexpense"
          className="input-area expense-form-input"
          placeholder="Enter Expense Name"
        />

        <input
          type="number"
          name="expenseAmount"
          className="input-area expense-form-input"
          placeholder="Enter Expense Amount eg.$50.."
        />

        <input type="hidden" name="_action" value="expense_form" />
        {Budgets.length === 1 ? <input type="hidden" name='budgetid' value={Budgets[0].id}/> : (
            <select name="budgetid" id="" className="expense-form-input input-area ">
                {Budgets.map((budg,index) => {
                    return (
                        <option key={index} value={budg.id}>{budg.newbudget}</option>
                    )
                })}
            </select>
        )}

        <button type="submit" className="btn">
          {isSubmiting ? (
            <>Submitting...</>
          ) : (
            <>
              Add Expense{" "}
              <span
                style={{
                  marginLeft: "5px",
                }}
              >
                <GiPayMoney />
              </span>
            </>
          )}
        </button>
      </fetcher.Form> 
    </div></>
  );
};

export default ExpenseTracker;
