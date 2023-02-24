import {Route ,Routes} from 'react-router-dom'
import Signup from './Routes/signup/signup'
import Home from './Routes/home/home'
import Nav from './Routes/navigate/Nav'
import Signin from './Routes/signin/signin'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
