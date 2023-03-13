import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { Home } from '../home/Home';
import { Login } from '../Login/Login';
import { Register } from '../register/Register';

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}
