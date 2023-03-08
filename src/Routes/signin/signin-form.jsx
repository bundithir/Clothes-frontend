import {SigninGooglePopup ,SigninUserWithEmailAndPassword} from '../../utils/firebase/firebase'
import { useState } from 'react'
import { Logoform } from '../navigate/nav-comp';
import { GoogleIcon } from '../../components/Icon';
import { Link , useNavigate } from 'react-router-dom';
const default_forum = {
    email : "",
    password : "",
}

const SigninForm = ()=>{
    const [data,Setdata] = useState(default_forum);
    const {email , password} = data
    const Navigate = useNavigate()
    const logGoogleUser = async() => {
        await SigninGooglePopup()
        Navigate('/')
    }
    const handleinput = (e) =>{
        const {name , value} = e.target;
        Setdata({...data , [name] : value})
    }
    // const reset = () =>{
    //     Setdata(default_forum)
    // }    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const {user} = await SigninUserWithEmailAndPassword(email,password)
            Navigate('/')
        }catch(error){
            console.log(error)
            alert('Something is wrong')
        }
    }
    return(
        <div className='flex justify-center items-center mt-[5rem]'>
            <form onSubmit={handleSubmit} className='flex flex-col p-5 gap-[1rem] rounded-xl shadow-xl w-[340px] bg-white border'>
                <Logoform />
                <input type="email" name = 'email' onChange={handleinput} value={email} placeholder='Email' required className='border p-2 border-black focus:outline-none'/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minLength="8" required className='border p-2 border-black focus:outline-none'/>
                <button type='submit' className='p-3 bg-[#2e6afd] text-white'>Sign in</button>
                <button type='button' onClick={logGoogleUser} className='relative p-3 border'>
                    <span className='absolute left-3'>
                        <GoogleIcon/>
                        </span>
                    Sign in with google
                </button>
                <p className='text-center'>Do not have an account create <Link to='/signup' className='underline'>here</Link></p>
            </form>
        </div>
    )
}

export default SigninForm;