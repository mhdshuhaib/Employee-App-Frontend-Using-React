import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employeeform from './components/Employeeform';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' excat element={<Home/>} />
        <Route path='/employee' excat element={<Employeeform/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
