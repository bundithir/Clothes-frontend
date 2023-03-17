import {Route ,Routes} from 'react-router-dom'
import Signup from './Routes/signup/signup'
import Home from './Routes/home/home'
import Nav from './Routes/navigate/Nav'
import Signin from './Routes/signin/signin'
import Men from './Routes/men/men'
import Checkout from './Routes/checkout/checkout'
import Women from './Routes/women/women'
import Kids from './Routes/kids/kids'
import { useEffect } from 'react'
import { AuthUserChange , CreateUserDocFromAuth } from './utils/firebase/firebase'
import { SetcurrentUser } from './store/user/user-action'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const state = AuthUserChange(user => {
        if(user){
            CreateUserDocFromAuth(user)
        }
        dispatch(SetcurrentUser(user))
    })
    return state;
  },[])
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/women/*' element={<Women/>}/>
        <Route path='/men/*' element={<Men/>}/>
        <Route path='/kids/*' element={<Kids/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
