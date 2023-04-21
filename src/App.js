import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'
import About from './pages/About/About'
import Tutorials from './pages/Tutorials/Tutorials'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import { UserAuthContextProvider} from "./pages/context/UserAuthContext.js"


import './App.css'
import Layout from './pages/Layout'
import { Stats } from './pages/Stats/Stats'

export default function App() {
  return (
    <Router>
      <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/start' element={<Yoga />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorials' element={<Tutorials />} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Signup/>}/>
        </Route>
      </Routes>
      </UserAuthContextProvider>
    </Router>
  )
}


