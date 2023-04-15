import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserRoute from './components/UserRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser } from './redux/actions';
import LoadingToRedirect from './components/LoadingToRedirect';

function App() {
  useEffect(()=>{
    onAuthStateChanged(auth, authUser => {
      if(authUser){
       setUser(authUser)
      }else{
      setUser(null)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
      <div id="particles-js"></div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <UserRoute>
                <Route exact path="/" element={<Home />} />
              </UserRoute>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/loading" element={<LoadingToRedirect />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
