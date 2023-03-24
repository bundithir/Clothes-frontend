import { useState } from "react";
import { createAuthUserWithEmailAndPassword , CreateUserDocFromAuth} from "../../utils/firebase/firebase";
import { Logoform } from '../navigate/nav-comp';
import { Link , useNavigate } from 'react-router-dom';

const default_forum = {
    displayName : "",
    email : "",
    password : "",
    confirm_pass : ""
}
const SignupForm = () =>{
    const [data , Setdata] = useState(default_forum)
    const {displayName,email,password,confirm_pass} = data
    const Navigate = useNavigate()
    const handleinput = (e) =>{
        const {name , value} = e.target
        Setdata({...data,[name] : value})
    }
    // const reset = () =>{
    //     Setdata(default_forum)
    // }
    const handleSubmit =  async(e) =>{
        e.preventDefault()
        if(password !== confirm_pass) {
            alert('passwords do not match')
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email , password)
            await CreateUserDocFromAuth(user , {displayName})
            Navigate('/')
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('email has already')
            }else { 
                console.log(error)
                alert('something is wrong')
            }  
        }
    }
    return (
        <div className='flex justify-center items-center mt-[5rem] mb-[6rem]'>
            <form onSubmit={handleSubmit} className='flex flex-col p-5 gap-[1rem] rounded-xl shadow-xl w-[340px] bg-white border'>
                <Logoform />
                <input type="text" name="displayName" onChange={handleinput} value={displayName} placeholder='Username' required className='border p-2 border-black focus:outline-none'/>
                <input type="email" name="email" onChange={handleinput} value={email} placeholder='Email' required className='border p-2 border-black focus:outline-none'/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minLength="8" required className='border p-2 border-black focus:outline-none'/>
                <input type="password" name="confirm_pass" onChange={handleinput} value={confirm_pass} placeholder='confirm password' minLength="8" required className='border p-2 border-black focus:outline-none'/>
                <button type="submit" className='p-3 bg-[#2e6afd] text-white'>Register</button>
                <p className='text-center'>Have already an account click <Link to ='/signin' className='underline'>here</Link></p>
            </form>
        </div>
    )
}
export default SignupForm
