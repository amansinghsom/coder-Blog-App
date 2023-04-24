import './App.css';
import Header from './components/Header'

import { Routes, Route } from 'react-router-dom'
import { CRoutes } from './Router'
import Login from './components/Login';
import SignUp from './components/SignUp';
import MyProvider from './Context';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Profile from './components/Profile';


function App() {
  return <>
    <MyProvider>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />}></Route>
        <Route path='/quotescreate' element={<Quotes />}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/profile' element={<Profile />}></Route>

      </Routes>
    </MyProvider>
  </>
}

export default App;
