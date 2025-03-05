import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter,Routes,Route} from 'react-router-dom';
import Register from './register.js';
import Deposit from './deposit.js';
import Cashback from './cashback.js';
import Alldata from './alldata.js';
import userContext from './context.js';
import Home from './home.js';
function App() { 
  return (<> 
  <Navbar bg="secondary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Bad-Bank</Navbar.Brand>
          <Nav className="auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#deposit">Deposit</Nav.Link>
            <Nav.Link href="#cashback">Cashback</Nav.Link>
            <Nav.Link href="#alldata">Alldata</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <HashRouter>
      <userContext.Provider value={{"users":[
        {name:"Sudha",email:"Sudha@gmail.com",password:"Sudha123",amount:1000}
      ]}}>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/deposit' element={<Deposit></Deposit>}></Route>
        <Route path='/cashback' element={<Cashback></Cashback>}></Route>
        <Route path='/alldata' element={<Alldata></Alldata>}></Route>
      </Routes>
      </userContext.Provider>
      </HashRouter>
      
  </>)
    
}

export default App;
