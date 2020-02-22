import React from 'react';

export default function Expenses({expenses,handleDeleteExpenses}){
    return(
        <div className="expenses">
            <h2 className="expenses__title">Expenses</h2>
            {
                expenses.map(item=>{
                    return(
                        <div className="expenses__list" key={item.id}>
                            <div className="item clearfix" id="expense-0">
                                <div className="item__description">{item.name}</div>
                                <div className="right clearfix">
                                    <div className="item__value">- {item.money}</div>
                                    <div className="item__delete">
                                        <button className="add__btn" onClick={()=>handleDeleteExpenses(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
                    
            }
        </div>
    )
}