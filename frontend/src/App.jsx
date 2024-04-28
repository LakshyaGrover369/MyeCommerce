import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import axios from 'axios';
import { Toaster } from 'react-hot-toast'

axios.defaults.baseURL =  'http://localhost:8080';
axios.defaults.withCredentials = true;

const App = () => {
  return (
  <>
    <Toaster position='top-right' toastOptions={{duration:2000}}/>
    <Router>
        <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/login' element={< Login />}></Route>  
                 <Route exact path='/signup' element={< Signup />}></Route>  
          </Routes>  
    </Router> 
  
  </>
  );
};

export default App;
