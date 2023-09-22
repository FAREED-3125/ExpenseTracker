import React, { useEffect ,useRef } from "react";
import { Form, useFetcher  } from "react-router-dom";

//icons import 
import {GiPayMoney} from 'react-icons/gi'

//css import
import "./createbudget.css";



const CreateBudget = () => {
  const fetcher = useFetcher();
  const isSubmiting = fetcher.state === "submitting";
  const formref = useRef()
  const autoFocus = useRef();
  useEffect(() => {
    if (!isSubmiting) {
      formref.current.reset();
      autoFocus.current.focus();
    }
  }, [isSubmiting]);

  return (
    <div className="create-budget-container dottedborder-box">
      <h3>Create new <span className="accent">Budget</span> </h3>
      <fetcher.Form ref={formref} className="create-budget-form" method="post">
        <input
          type="text"
          htmlFor="Newbudget"
          name="newbudget"
          placeholder="Enter Budget"
          className="input-area create-budget-input"
          required
          ref={autoFocus}
        />
        <input
          type="number"
          htmlFor="Newbudget"
          name="budgetamount"
          placeholder="Enter amount"
          className="input-area amount-input"
          required
        />
        <input type="hidden" name="_action" value="createnew" />

        <button type="submit" className="btn" disabled={isSubmiting}>
          {isSubmiting ? <>Submitting...</> : <>Create budget <span style={{
            marginLeft: "5px"
          }}><GiPayMoney/></span></>}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default CreateBudget;
