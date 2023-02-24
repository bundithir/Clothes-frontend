import { initializeApp } from "firebase/app";
import { getAuth , 
    signInWithPopup , 
    GoogleAuthProvider ,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword , 
    signOut ,
    onAuthStateChanged
} from 'firebase/auth'

import { getFirestore ,
  doc , 
  getDoc ,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
 
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth()

const db = getFirestore();

const Google_Provider = new GoogleAuthProvider()
Google_Provider.setCustomParameters({
  prompt: 'select_account'
});

export const SigninGooglePopup = () => signInWithPopup(auth , Google_Provider)

export const SigninUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password)return;
  return signInWithEmailAndPassword(auth , email,password)
}


export const createAuthUserWithEmailAndPassword = async(email , password) =>{
  if(!email || !password)return;
  return createUserWithEmailAndPassword(auth, email, password)
}


export const CreateUserDocFromAuth = async(User , Optional = {}) =>{
  if(!User)return;
  const UserdocRef = doc(db , 'users' , User.uid)
  const docSnap = await getDoc(UserdocRef);

  if(!docSnap.exists()){
    const {displayName , email} = User
    const createdAt = new Date()
    try{
      await setDoc(UserdocRef , {
        displayName,
        email,
        createdAt,
        ...Optional
      })
    }catch(error){
      console.log(error)
    }
  }
  return UserdocRef;
}

export const SignoutUser = () => signOut(auth);

export const AuthUserChange = ( callback ) => onAuthStateChanged(auth , callback)