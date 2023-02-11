import { useState } from "react";
const default_forum = {
    name : "",
    email : "",
    password : "",
    conpass : ""
}
const Register = () =>{
    const [data , Setdata] = useState(default_forum)
    const {name,email,password,conpass} = data
    // console.log(data)
    const handleinput = (e) =>{
        Setdata({...data,[e.target.name] : e.target.value})
    }
    const reset = () =>{
        Setdata(default_forum)
    }
    const handleSubmit =  (e) =>{
        e.preventDefault()
        reset()
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit} className=''>
                <input type="text" name="name" onChange={handleinput} value={name} placeholder='Username' required className="border-2"/>
                <input type="email" name="email" onChange={handleinput} value={email} placeholder='Email' required className="border-2"/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minlength="8" required className="border-2"/>
                <input type="password" name="conpass" onChange={handleinput} value={conpass} placeholder='confirm password' minlength="8" required className="border-2"/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Register
