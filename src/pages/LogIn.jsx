import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

function LogIn() {
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const emailRef = useRef();
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setErr("");

    signIn(email, password)
      .then(() => {
        navigate("/");
        e.target.reset();
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  const handleForgot = () => {
    const email = emailRef.current.value;
    if (!email) {
      setErr("Please enter your email to reset your password.");
      return;
    }

    // Password reset logic (not shown for brevity)
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-4">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-semibold text-xl">Log In</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef}
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
              required
            />
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="absolute top-14 right-3"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
            <span>
              If you don&apos;t have an account,{" "}
              <Link to={"/register"} className="hover:underline">
                Register
              </Link>
            </span>
            <label className="label">
              <span
                onClick={handleForgot}
                className="label-text-alt link link-hover"
                role="button"
                tabIndex="0"
              >
                Forgot password?
              </span>
            </label>
          </div>
          {err && <p className="text-red-400">{err}</p>}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Log In</button>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn btn-outline flex items-center justify-center"
            >
              <FcGoogle className="mr-2" /> Log In with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
