import { redirect } from "react-router-dom";

// Toastify library
import { toast } from "react-toastify";

export const wait = () => new Promise(res => setTimeout(res,Math.random()*3000));

export function fetchUser(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}

export function DeleteUser(key) {
  try{
  return (localStorage.removeItem(key))
  }catch(err){
    throw Error(err)
  }
}


export async function createUser (data) {
  
  const {_action,...value} = data; 
  const prev_budget = fetchUser('Budgets') ?? [];
  const prev_expense = fetchUser('Expense') ?? [];


  if(_action === 'Login'){
   
  return localStorage.setItem('userName',JSON.stringify(value.userName))
  }

  if(_action === "createnew"){
  const id = Date.now();
  const spend = 0;
  const newbud = {id,spend,...value};
  const newbudget = [...prev_budget,newbud];
  toast.success("Budget Created.")

  return localStorage.setItem('Budgets',JSON.stringify(newbudget))
  }

  if(_action === 'expense_form'){
      const expenseBud = prev_budget.filter((budg) => budg.id === Number(value.budgetid));
      const existbud = fetchUser('Budgets');
      const budg = existbud.filter((budg) => budg.id !== Number(value.budgetid))
      if((expenseBud[0].spend +  Number(value.expenseAmount)) <= expenseBud[0].budgetamount ){
      expenseBud[0].spend += Number(value.expenseAmount)
      toast.success(`Expense added to ${expenseBud[0].newbudget}`)
      localStorage.removeItem('Budgets');
     localStorage.setItem('Budgets',JSON.stringify([expenseBud[0],...budg]));
     localStorage.setItem('Expense',JSON.stringify([value,...prev_expense]))
      }else{
        toast.error('Failed to update.exceeding budget Amount.')
      }
  }

}


//Delete budget

export const Deletebudget = async (id) => {
  
  try{
    const budget = await fetchUser('Budgets') ?? [];
    const expense = await fetchUser('Expense') ?? [];
    const filteredBudget = budget.filter(budg => (
      budg.id !== Number(id)
    ))
    const  filterExpense = expense.filter(budg => (
      Number(budg.budgetid) !== Number(id)
    ))
    localStorage.removeItem('Budgets');
     localStorage.setItem('Budgets',JSON.stringify(filteredBudget));
     localStorage.setItem('Expense',JSON.stringify(filterExpense));
  }catch(err){
    throw Error(err);
  }

}

