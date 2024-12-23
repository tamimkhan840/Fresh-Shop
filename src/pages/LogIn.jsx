
import { sendPasswordResetEmail} from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../context";


function LogIn() {
  //  const [err, setErr] = useState("")
  const [show, setShow] = useState(false)
  const [err, setErr] = useState("")
  const emailref = useRef()
  const {signIn} = useContext(AuthContext)
  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setErr("")

    signIn(email, password)
    .then((result)=>{
      console.log(result);
      Navigate('/')
      e.target.reset()

    }).catch((error)=>{
      setErr(error.message);
      console.log(error);

    })

  }
  // PasswordReset
  const handleforgot = () =>{
    const email = emailref.current.value;
    sendPasswordResetEmail(auth, email)
    .then((result)=>{
      console.log(result);

    }).catch((error)=>{
      setErr(error.message);
      console.log(error);

    })
  }

  return (
    <div>
       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">
          <form onSubmit={(e)=>handleSubmit(e)} className="card-body">
          <h2 className="text-center font-semibold text-xl">LogIn New</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
               type="email"
               ref={emailref}
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
              <span>if you don&apos;t have a account<Link to={"/register"} className="hover:underline"> LogIn</Link></span>
              <label className="label">
                <a onClick={handleforgot} className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {err && <p className="text-red-400">{err}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary">LogIn</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default LogIn
