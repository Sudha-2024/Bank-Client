import userContext from "./context.js";
import { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cashback() {
    const users = useContext(userContext);
    let n=users.users.length;
    const [balance, setBalance] = useState(users.users[n-1].amount);
    const [cashback, setCashback] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const amount = Number(cashback);
       console.log(amount)
        // Validation checks
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        if (amount > balance) {
            alert("Insufficient balance! Please enter a smaller amount.");
            return;
        }

        // Deduct cashback and update user balance
        const newBalance = balance - amount;
        setBalance(newBalance);
        users.users[n-1].amount = newBalance;

        alert(`Withdrawal successful! Remaining balance: ₹${newBalance}`);
        setCashback(''); // Clear the input after submission
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ textAlign: 'center', padding: '70px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
            <h1>Cashback:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={cashback}
                    onChange={(e) => setCashback(e.target.value)}
                    placeholder="Enter cashback amount"
                    required
                />
                <Button variant="success" type="submit" className="ms-0">
                    Withdraw
                </Button>
            </form>
            <h2>Balance: ₹{balance}</h2>
        </div>
        </div>
    );
}
