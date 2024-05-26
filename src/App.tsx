import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/signup/SignUp';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
