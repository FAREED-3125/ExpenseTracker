import React, { useEffect } from "react";
import { BsTrash } from "react-icons/bs";

//css import
import "./exbudget.css";
import { DeleteUser, Deletebudget } from "../Loaders";
import { useFetcher } from "react-router-dom";

const ExBudgets = ({ budget }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state = 'submitting';

  useEffect(()=>{
    
  },[isSubmitting])
  return (
    <div className=" ex-budget-container reveal ">
      <div className="dottedborder-ex">
        <div className="budget-name-amount">
          <h3>{budget.newbudget}</h3>
          <p className="green">₹ {budget.budgetamount}.00</p>
          <fetcher.Form method='post' >
            <input type="hidden" name='_action' value='deletebudget'/>
            <input type="hidden"  name='budgetid' value={budget.id}/>
          <button className="btn btn-delete" type='submit'>
            <BsTrash />
          </button></fetcher.Form>
        </div>
        <div className="progress-container">
          <progress max="100" value={(budget.spend/budget.budgetamount)*100}>
            
          </progress>
        </div>
        <div className="budget-status">
          <p><small>spent</small></p>
          <p><small>remaining</small> <span className="accent">₹ {(budget.budgetamount - budget.spend)}.00</span></p>
        </div>
      </div>
    </div>
  );
};

export default ExBudgets;
