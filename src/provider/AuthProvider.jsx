import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "../context";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";



export default function AuthProvider({children}) {
    const [users, setUsers] = useState(null)
    const [isLoader, setIsLoader] = useState(true)
    const [addToCart,setAddToCart] = useState([])
    const [product, setProduct] = useState('')


    const createUser = (email, password) =>{
        setIsLoader(true)
       return createUserWithEmailAndPassword(auth,email,password)

    }
    const signIn = (email, password) =>{
        setIsLoader(true)
       return signInWithEmailAndPassword(auth,email,password)

    }
    const signOutUser =() => {
        setIsLoader(true)
        signOut(auth)
    }
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currantUser) =>{
            if (currantUser) {
                setUsers(currantUser)
                setIsLoader(false)
            } else{
                setUsers(null)
                setIsLoader(true)
            }
        })
        return()=>{
            unSubscribe()
        }

    },[])
    const authInfo = {
        users,
        setUsers,
        createUser,
        signIn,
        isLoader,
        signOutUser,
        setAddToCart,
        addToCart,
        setProduct,
        product

    }

  return (
    <div>
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

// export default AuthProvider
