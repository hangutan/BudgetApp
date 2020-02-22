import React from 'react';

export default function Top({totalExpenses,totalIncome,total}){
    return(
<div className="top" >
    <div className="budget">
        <div className="budget__title">
            Available Budget in <span className="budget__title--month">2</span>:
        </div>
        <div className="budget__value">{total}</div>
        <div className="budget__income clearfix">
            <div className="budget__income--text">Income</div>
            <div className="right">
            <div className="budget__income--value">+ {totalIncome}</div>

            </div>
        </div>

        <div className="budget__expenses clearfix">
            <div className="budget__expenses--text">Expenses</div>
            <div className="right clearfix">
            <div className="budget__expenses--value">- {totalExpenses}</div>
            </div>
        </div>
    </div>
</div>
    )
}