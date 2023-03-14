import React, { useState } from 'react';

// const AddExpense = (props) => {

// const expense ={
//     title:"",
//     amount:"",
//     date:""
// }
//     const onClickHandler =() => props.onExpenseAdd(expense)


//     const handleOnTitleChange = (event)=> expense.title = event.target.value;


//     const handleOnAmountChange = (event)=> expense.amount = event.target.value;


//     const handleOnDateChange = (event)=> expense.date = event.target.value;


//     return(
//         <div className="expense_add_expense">
//           Title <input type="text" onChange={handleOnTitleChange}></input>
//           Amount <input type="number" onChange={handleOnAmountChange}></input>
//           Date <input type="date" onChange={handleOnDateChange}></input>
//            <button onClick={onClickHandler}>Add</button>
//         </div>
//     )
// }

const AddExpense = (props) => {

    const [title, setTitle] = useState("");
    const [Amount, setAmount] = useState("");
    const [Date, setDate] = useState("");




    const onClickHandler = () => { }


    const handleOnTitleChange = (event) => {
        setTitle ( event.target.value);
    }


    const handleOnAmountChange = (event) => {
        setAmount ( event.target.value);
    }


    const handleOnDateChange = (event) => {
        setDate ( event.target.value);
    }


    return (
        <div className="expense_add_expense">
            Title <input type="text" onChange={handleOnTitleChange} value={title}></input>
            Amount <input type="number" onChange={handleOnAmountChange} value={Amount}></input>
            Date <input type="date" onChange={handleOnDateChange} value={Date}></input>
            <button onClick={onClickHandler}>Add</button>
        </div>
    )
}

export default AddExpense;

