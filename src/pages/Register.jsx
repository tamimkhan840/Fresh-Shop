import {  updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

import { AuthContext } from "../context";


function Register() {
  const [err, setErr] = useState("")
  const [show, setShow] = useState(false)
  const {createUser} = useContext(AuthContext)
  const Navigate = useNavigate()
  // console.log(createUser);

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const term = e.target.term.checked;



    console.log(term);


    setErr("")
    if (password.length < 6) {
      setErr("password should be at least 6 character")
      return;
    }
    
    if (!term) {
      setErr("Please checked the term")
    }
    createUser(email, password)
    .then((result)=>{
      console.log(result);
      Navigate('/')
      e.target.reset()
      const updateUsers = {
        displayName : name,
        photoURL : photo


      }
      updateProfile(auth.currentUser , updateUsers)
      .then((result) =>{
        console.log(result);

      }).catch((error)=>{
        setErr(error.message);
        console.log(error);

      })

    }).catch((error)=>{
      setErr(error.message);
      console.log(error);

    })


  }


  return (
    <div>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">

          <form onSubmit={(e)=>handleSubmit(e)} className="card-body">
            <h2 className="text-center font-semibold text-xl">Register New</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
               type="text"
               placeholder="name"
               className="input input-bordered"
               required
               name="name"
               />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">photo</span>
              </label>
              <input
               type="text"
               placeholder="photo Url"
               className="input input-bordered"
               required
               name="photo"
               />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               type="email"
               placeholder="email"
               className="input input-bordered"
               required
               name="email"
               />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              type={show ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              name="password"
              required />
              <button onClick={() => setShow(!show)} type="button" className="absolute top-14 right-3">
                {
                  show ? <FaEyeSlash /> : <FaEye />
                }

              </button>
              <span>if you have a account<Link to={"/login"} className="hover:underline"> LogIn</Link></span>
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label> */}
            </div>
            <div className="form-control ">
              <label className="cursor-pointer label justify-start space-x-2">
              <input name="term" type="checkbox" className="checkbox checkbox-secondary" />
                <span className="label-text">Remember me</span>

              </label>
            </div>
            {err && <p className="text-red-400">{err}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Register
