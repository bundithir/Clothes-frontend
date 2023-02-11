import { async } from '@firebase/util'
import {SigninGooglePopup} from '../../utils/firebase/firebase'

const Signin = () =>{
    const logGoogleUser = async() => {
        const response = await SigninGooglePopup()
        console.log(response)
    }
    return (
        <div>
            <button onClick={logGoogleUser}>Signin with google</button>
        </div>
    )
}
export default Signin