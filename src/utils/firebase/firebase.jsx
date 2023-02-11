import { initializeApp } from "firebase/app";
import { getAuth , 
    signInWithPopup , 
    signInWithRedirect ,
    GoogleAuthProvider 
} from 'firebase/auth'

const firebaseConfig = {
 
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth()

const Google_Provider = new GoogleAuthProvider()
Google_Provider.setCustomParameters({
  prompt: 'select_account'
});

export const SigninGooglePopup = () => signInWithPopup(auth , Google_Provider)
