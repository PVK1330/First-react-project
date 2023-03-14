
import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'

const expenses = [
    {date: "03/13/2023" , title: "Shopping", amount: "$100"},
    {date: "03/14/2023" , title: "Party", amount: "$200"},
]

const result = expenses.map(item => {
    return (<ExpenseItem expense={item}/>)
})

const onNewExpenseAdd = (expense) => {
    expenses.push(expense)
    console.log(expenses);
}

const Expenses = () =>{
    return(
        <><AddExpense onExpenseAdd={onNewExpenseAdd}/>
        {/* {
            expenses.map((expense, index) => {
                return(<ExpenseItem key={index} expense = {expense} />)
            })
        } */}
        {result}
        </>
    )
}

export default Expenses;

