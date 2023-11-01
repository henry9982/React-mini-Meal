import React from 'react'
import Nav from './components/Nav'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import MealsByCategory from './pages/MealsByCategory'
import NotFound from './pages/NotFound'
import DefaultTopPick from './pages/DefaultTopPick'

const App = () => {
  const location = useLocation()
  console.log(location);
  return (
    <div className=''>
       <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}>
              <Route index element={<DefaultTopPick/>}/>
              <Route path='/category/:id' element={<MealsByCategory/>}/>
            </Route>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default App