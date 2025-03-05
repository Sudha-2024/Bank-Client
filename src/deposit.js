import userContext from "./context.js";
import {useContext,useState} from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Deposit()
{
    let users=useContext(userContext);
    let n=users.users.length;
    let [Balance,setBalance]=useState(users.users[n-1].amount)
    let [deposit,setDeposit]=useState(0)
    function handleSubmit(e)
    {
        e.preventDefault();
        let dep=Number(deposit)
        setBalance(Balance+dep)
        console.log(dep)
    }
    users.users[n-1].amount=Balance
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '70px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
    <h1>Deposit:</h1>
    <form onSubmit={handleSubmit}>
    <input type="number"onChange={(e)=>setDeposit(e.target.value)} placeholder="Enter deposit amount"></input>
    <Button variant="success" type="submit">Debit</Button>
    </form>
    <h2>Balance:₹{Balance}</h2>
    </div>
    </div>)
}

