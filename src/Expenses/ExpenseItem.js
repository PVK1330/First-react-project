import moment from 'moment';


// const ExpenseItem = (props) => {

//     return (
//         <>
//             <div className="expense_item_strip radius_10 padding_10 boarder_white">
//                 <div className='expense_item_date boarder_white radius_10'>
//                     <span> { moment(new Date(props.expense.date)).format('MMMM') } </span>
//                     <span>{ moment(new Date(props.expense.date)).format('DD') }</span>
//                     <span className='expense_item_date_day'>{ moment(new Date(props.expense.date)).format('YYYY') }</span>
//                 </div>
//                 <div className='expense_item_title'> Expense For : {props.expense.title}</div>
//                 <div className='expense_item_amount boarder_white radius_10 padding_10'>{props.expense.amount}</div>
//             </div>  
//      </>
//     )
// }




const ExpenseItem = (props) => {
    const {expense} = props;
    return (
        <>
            <div className="expense_item_strip radius_10 padding_10 boarder_white">
                <div className='expense_item_date boarder_white radius_10'>
                    <span> { moment(new Date(expense.date)).format('MMMM') } </span>
                    <span>{ moment(new Date(expense.date)).format('DD') }</span>
                    <span className='expense_item_date_day'>{ moment(new Date(expense.date)).format('YYYY') }</span>
                </div>
                <div className='expense_item_title'> Expense For : {expense.title}</div>
                <div className='expense_item_amount boarder_white radius_10 padding_10'>{expense.amount}</div>
            </div>  
     </>
    )
}

export default ExpenseItem