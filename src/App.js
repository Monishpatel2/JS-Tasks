import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CounterTimer from './Components/CounterTimer';
import CounterWithLocalStorage from './Components/Counterwithlocalstorage';
import MiniCalculator from './Components/MiniCalculator';
import FormWithValidation from './Components/FormWithValidation';
import FormWithValidationusinghooks from './Components/FormWithValidationusinghooks';
import SignupApp from './Components/SignUp';
import TodoList from './Components/Todolist';
import APIToTable from './Components/APIToTable';
import FakeStore from './Components/FakeStore';

function App() {
  return (
    <Router>
    <div className="nav-container">
      <nav>
        <ul>
          <li><Link to="/">Counter Timer</Link></li>
          <li><Link to="/CounterWithLocalStorage">Counter with Local Storage</Link></li>
          <li><Link to="/MiniCalculator">Mini Calculator</Link></li>
          <li><Link to="/FormWithValidation">Simple Form</Link></li>
          <li><Link to="/FormWithValidationusinghooks">Form using hooks</Link></li>
          <li><Link to="/SignUp">SignUp App</Link></li>
          <li><Link to="/TodoList">To-Do List</Link></li>
          <li><Link to="/APIToTable">API To Table</Link></li>
          <li><Link to="/FakeStore">Fake Store</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CounterTimer />} />
        <Route path="/CounterWithLocalStorage" element={<CounterWithLocalStorage />} />
        <Route path="/MiniCalculator" element={<MiniCalculator />} />
        <Route path="/FormWithValidation" element={<FormWithValidation />} />
        <Route path="/FormWithValidationusinghooks" element={<FormWithValidationusinghooks />} />
        <Route path="/SignUp" element={<SignupApp />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/APIToTable" element={<APIToTable />} />
        <Route path="/FakeStore" element={<FakeStore />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
