import { useState } from "react";
import { createAuthUserWithEmailAndPassword , CreateUserDocFromAuth} from "../../utils/firebase/firebase";

const default_forum = {
    displayName : "",
    email : "",
    password : "",
    confirm_pass : ""
}
const SignupForm = () =>{
    const [data , Setdata] = useState(default_forum)
    const {displayName,email,password,confirm_pass} = data
    const handleinput = (e) =>{
        const {name , value} = e.target
        Setdata({...data,[name] : value})
    }
    const reset = () =>{
        Setdata(default_forum)
    }
    const handleSubmit =  async(e) =>{
        e.preventDefault()
        if(password !== confirm_pass) {
            alert('passwords do not match')
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email , password)
            await CreateUserDocFromAuth(user , {displayName})
            reset()
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('email has already')
            }else { 
                alert('something is wrong',error)
            }  
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className=''>
                <input type="text" name="displayName" onChange={handleinput} value={displayName} placeholder='Username' required className="border-2"/>
                <input type="email" name="email" onChange={handleinput} value={email} placeholder='Email' required className="border-2"/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minLength="8" required className="border-2"/>
                <input type="password" name="confirm_pass" onChange={handleinput} value={confirm_pass} placeholder='confirm password' minLength="8" required className="border-2"/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default SignupForm
