import React, {useState} from 'react';
import './App.css';
import Top from './Top';
import Footer from './Footer';


function App() {
  const dataIncome = [
    {
      id : 1,
      name : 'Mua xe',
      money: 2000000,
    },
    {
      id: 2,
      name : 'Xây nhà',
      money:1000000,
    }
  ]
  const dataExpenses = [
    {
      id:1,
      name : 'Chơi gái',
      money: 500000,
    },
    {
      id:2,
      name:'Bia ôm',
      money:100000,
    }
  ]
  
  const [income, setIncome]= useState(dataIncome);
  const [expenses,setExpenses]=useState(dataExpenses);
  const [totalIncome,setTotalIncome]=useState(3000000);
  const [totalExpenses,setTotalExpenses]=useState(600000);
  const [name,setName]=useState('');
  const [money,setMoney]=useState('');
  const [value,setValue]=useState(1);
  const [id,setId]=useState('');
  const [total,setTotal] = useState(2400000);

  const handleSelect=(e)=>{
    setValue(e.target.value);
  }

  const handleName=(e)=>{
    setName(e.target.value);
  }

  const handleMoney=(e)=>{
    setMoney(e.target.value);
  }

  const handleSubmit=()=>{
    if(value===1){
      const item = {
        name,
        money,
        id:id+1
      }
      let tt = parseInt(item.money) + totalIncome;
      let ttt = parseInt(item.money) + total;
      setIncome([...income,item]);
      setTotalIncome(tt);
      setTotal(ttt);
    }else{
      const item = {
        name,
        money,
        id:id+1
      }
      let tt = parseInt(item.money) + totalExpenses;
      let ttt = total-parseInt(item.money);
      setExpenses([...expenses,item]);
      setTotalExpenses(tt);
      setTotal(ttt);
    }
  }

  const handleDeleteInCome=(id)=>{
    let task = income.filter(item=>{
      return item.id !==id
    });
    let subtask = income.find(item=>{
      return item.id === id
    })
    let sub = subtask.money;
    console.log(sub)
    setIncome(task);
    setTotalIncome(totalIncome-sub);
    setTotal(total - sub)
  }

  const handleDeleteExpenses=(id)=>{
    let task = expenses.filter(item=>{
      return item.id !==id
    });
    let subtask = expenses.find(item=>{
      return item.id === id
    })
    let sub = subtask.money;
    console.log(sub)
    setExpenses(task);
    setTotalExpenses(totalExpenses-sub);
    setTotal(total + sub)
  }

  return (
    <>
      <Top 
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        total={total}
      />
      <Footer 
        income={income}
        expenses={expenses}
        handleSelect={handleSelect}
        handleName={handleName}
        handleMoney={handleMoney}
        handleSubmit={handleSubmit}
        handleDeleteInCome={handleDeleteInCome}
        handleDeleteExpenses={handleDeleteExpenses}
      />
  </>
  );
}

export default App;
