import React from 'react'; 
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() 
{
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '55vh' }}>
            <h1 className="mb-4" style={{ color: 'white', textAlign: 'center' }}>Welcome to Bad-Bank</h1>
            <p style={{ color: 'white', textAlign: 'center' }}>Your trusted partner for safe and secure banking.</p>
        </div>
    );
}

export default Home;
