import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Main from './pages/Main'
import Details from './pages/Details'
import Form from './pages/Form'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />}/>
          <Route exact path='/home' element={<Main />}/>
          <Route exact path='/createrecipe' element={<Form /> }/>
          <Route exact path='/home/:id' element={<Details /> }/>   
          <Route path='*' element={<NotFound />}/>     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
