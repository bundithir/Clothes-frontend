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
  setDoc ,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrVqAFTYonvoaEOIh32UTvEbUPI9EY26U",
  authDomain: "clothing-9679c.firebaseapp.com",
  projectId: "clothing-9679c",
  storageBucket: "clothing-9679c.appspot.com",
  messagingSenderId: "543302598805",
  appId: "1:543302598805:web:dc9444ebaaa049ea7ddb9c"
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

export const AddCollectionAndDoc = async(CollectionKey , ObjectstoAdd) =>{
  const collectionRef = collection(db , CollectionKey)
  const batch = writeBatch(db)

  ObjectstoAdd.forEach((item)=>{
    const docRef = doc(collectionRef,item.title.toLowerCase())
    batch.set(docRef , item)
  })

  await batch.commit()
}

export const GetDataDocument = async(CollectionKey) => {

  const collectionRef = collection(db , CollectionKey)
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  const data = querySnapshot.docs.reduce((acc , doc)=> {
    const { title , items } = doc.data()
    acc[title.toLowerCase()] = items
    return acc
  } ,{})
  return data
}