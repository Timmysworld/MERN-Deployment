import './App.css';
import Display from './components/Display';
// import {Link} from 'react-router-dom'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Form from "./components/Form";
import Header from './components/Header'
import Info from './components/Info'
import Update from './components/Update';
// import React, {useState} from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<><Header/> <Display/></>}/>
        <Route path='/new' element={<><Header/> <Form/></>}/>
        <Route path='/info/:id' element={<><Header/> <Info/></>}/>
        <Route path='/info/update/:id' element={<><Header/> <Update/></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
