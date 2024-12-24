import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../context";
import { auth } from "../firebase/firebase.init";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [isLoader, setIsLoader] = useState(true);
  const [addToCart, setAddToCart] = useState([]);
  const [product, setProduct] = useState("");

  const provider = new GoogleAuthProvider();

  // Create user
  const createUser = (email, password) => {
    setIsLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setIsLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google sign-in
  const signInWithGoogle = () => {
    setIsLoader(true);
    return signInWithPopup(auth, provider);
  };

  // Sign out user
  const signOutUser = () => {
    setIsLoader(true);
    signOut(auth);
  };

  // Monitor authentication state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUsers(currentUser);
        setIsLoader(false);
      } else {
        setUsers(null);
        setIsLoader(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    users,
    setUsers,
    createUser,
    signIn,
    signInWithGoogle,
    isLoader,
    signOutUser,
    setAddToCart,
    addToCart,
    setProduct,
    product,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}
