import './App.css';
import { setUser } from './Redux/Features/authSlice';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allroutes from './Components/AllRouters';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('profile'));
    dispatch(setUser(user));
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <ToastContainer/>
      </BrowserRouter>
        <Allroutes/>
    </div>
  );
}

export default App;
