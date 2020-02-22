import React from 'react';

export default function InCome({income,handleDeleteInCome}){
    return(
        <div className="income">
            <h2 className="icome__title">Income</h2>
            {
                income.map(item=>{
                    return(
                        <div className="income__list" key={item.id}>
                            <div className="item clearfix">
                                <div className="item__description">{item.name}</div>
                                <div className="right clearfix">
                                    <div className="item__value">+ {item.money}</div>
                                    <div className="item__delete">
                                        <button className="add__btn" onClick={()=>handleDeleteInCome(item.id)}>Delete</button>
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