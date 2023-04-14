import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/login' Component={Login}/>
    <Route exact path='/register' Component={Register}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
