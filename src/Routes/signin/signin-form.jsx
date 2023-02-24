import {SigninGooglePopup , CreateUserDocFromAuth ,SigninUserWithEmailAndPassword} from '../../utils/firebase/firebase'
import { useState } from 'react'
const default_forum = {
    email : "",
    password : "",
}

const SigninForm = ()=>{
    const [data,Setdata] = useState(default_forum);
    const {email , password} = data
    const logGoogleUser = async() => {
        await SigninGooglePopup()
    }
    const handleinput = (e) =>{
        const {name , value} = e.target;
        Setdata({...data , [name] : value})
    }
    const reset = () =>{
        Setdata(default_forum)
    }    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const {user} = await SigninUserWithEmailAndPassword(email,password)
            reset()
        }catch(error){
            console.log(error)
        }
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name = 'email' onChange={handleinput} value={email} placeholder='Email' required/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minLength="8" required/>
                <button type='submit'>Sign in</button>
                <button type='button' onClick={logGoogleUser}>Sign in with Google</button>
            </form>
        </div>
    )
}

export default SigninForm;