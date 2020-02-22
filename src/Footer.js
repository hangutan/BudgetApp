import React from 'react';
import InCome from './InCome';
import Expenses from './Expenses';

export default function Footer({
        expenses,
        income,
        handleSelect,
        handleName,
        handleMoney,
        handleSubmit,
        handleDeleteInCome,
        handleDeleteExpenses
    }){
    return(
    <div className="bottom">
        <div className="add">
            <div className="add__container">
                <select className="add__type" onChange={handleSelect}>
                    <option value="1">+</option>
                    <option value="0">-</option>
                </select>
                <input 
                    type="text" className="add__description" 
                    placeholder="Add description" onChange={handleName}
                />
                <input 
                    type="number" className="add__value" 
                    placeholder="Value" onChange={handleMoney}/>
                <button type="submit" className="add__btn" onClick={handleSubmit}>Lưu</button>
            </div>
        </div>
        <div className="container clearfix">
            <InCome income={income} handleDeleteInCome={handleDeleteInCome}/>
            <Expenses expenses={expenses} handleDeleteExpenses={handleDeleteExpenses}/>
        </div>
    </div>
    )
}