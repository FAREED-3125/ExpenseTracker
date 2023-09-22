import React from "react";
import { Deletebudget, createUser, fetchUser } from "../Loaders";
import { redirect, useLoaderData } from "react-router-dom";
import LoginUser from "../LoginUser/LoginUser";
import CreateBudget from "../CreateBudget/CreateBudget";
import ExpenseTracker from "../ExpenseTracker/ExpenseTracker";
import { toast } from "react-toastify";
import { wait } from "@testing-library/user-event/dist/utils";
import ExBudgets from "../ExBudgets/ExBudgets";

//css import
import "./dashboard.css";
import BudHistory from "../BudHistory/BudHistory";

export const LoaderDashboard = () => {
  const userName = fetchUser("userName");
  const Budgets = fetchUser("Budgets");
  const expense = fetchUser("Expense");

  return { userName, Budgets, expense };
};

// =========================================================================================
// create user Functions (loader)
export const LoginUserFunc = async ({ request }) => {
  await wait();
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  const { _action, ...value } = formData;

  if (_action === "Login") {
    try {
      createUser(formData);
      toast.success(`Welcome ${formData.userName}`);
    } catch (err) {
      throw new Error("Error on Updating the user");
    }
    return redirect("/");
  }

  if (_action === "createnew") {
    try {
      createUser(formData);
    } catch (error) {
      throw Error("Connot Update Budgets");
    }

    return redirect("/");
  }

  if (_action === "expense_form") {
    try {
      createUser(formData);
    } catch (err) {
      throw Error(err);
    }

    return redirect("/");
  }

  if (_action === "deletebudget") {
    // eslint-disable-next-line
    if (confirm("Delete Budget.")) {
      try {
        Deletebudget(formData.budgetid);
        toast.success("Budget Deleted");
      } catch (err) {
        throw Error(err);
      }
    }
    //  eslint-disable-line

    return redirect("/");
  }
};
// =======================================================================================
const DashBoard = () => {
  const { userName } = useLoaderData();
  let { Budgets, expense } = useLoaderData();
  if (!Budgets) {
    Budgets = [];
  }

  if (!expense) {
    expense = [];
  }

  console.log(expense);

  return (
    <>
      {userName ? (
        <div className="DashBoard-Container container">
          <div className="sub-container">
            <h2>
              Welcome back, <span className="accent">{userName}</span>
            </h2>
            {Budgets.length > 0 ? (
              <>
                <div className="expense-budget-container">
                  <CreateBudget />
                  <ExpenseTracker Budgets={Budgets} />
                </div>
              </>
            ) : (
              <>
                <p
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Introducing our innovative expense tracker app,
                  <br /> designed to simplify your financial journey and empower
                  you to take control of your spending.
                </p>
                <CreateBudget />
              </>
            )}
          </div>

          {Budgets.length > 0 && (
              <section className="container section-2 reveal">
                <div className="sub-container">
                  <h2>Existing Budgets.</h2>
                  <div className="exist-Budgets">
                    {Budgets.map((budget, index) => (
                      <ExBudgets budget={budget} key={index} />
                    ))}
                  </div>
                </div>
              </section>
          )
}
              {expense.length > 0 && (
                <section className="section-3 container">
                  <div className="sub-container">
                    <h2>Budget History.</h2>
                    <BudHistory Budgets={Budgets} expense={expense} />
                  </div>
                </section>
              )}
           
          
        </div>
      ) : (
        <LoginUser />
      )}
    </>
  );
};

export default DashBoard;
