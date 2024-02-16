/* eslint-disable no-unused-vars */
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Home from './Pages/Home';
import Success from './Pages/Success';
import NotFound from './Pages/NotFound';


function App(){
  return(
    <div>
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/success" element={<Success/>}></Route>
               <Route path="*" element={<NotFound/>}></Route>
               <Route path=""></Route>
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;