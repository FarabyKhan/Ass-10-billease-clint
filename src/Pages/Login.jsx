import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {

  const { setUser, signInUser, resetPassword, setLoading, signInWithGoogle } = use(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();


  const [show, setShow] = useState(false)
  const [email, setEmail] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(res => {
        const user = res.user;
        setUser(user)
        toast.success("Successfully login", user)

        navigate("/")
        navigate(`${location.state ? location.state : "/"}`)

      })
      .catch(error => {
        toast.error(error.message)
        console.log(error.message);

      })

  }

  const handleGoogleSignIn = () => {

    signInWithGoogle()
      .then(result => {
        const user = result.user
        navigate("/")
        console.log(result);
        const newUser = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
        }
        //create user in the database
        fetch('http://localhost:3000/user', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('data after user save', data);

          })
        toast.success("Successfully Login With Google", user)
        navigate(`${location.state ? location.state : "/"}`)

      })
      .catch(error => {
        setLoading(false)
        console.log(error);

      })

  }

  const handleForgetPassword = (e) => {
    e.preventDefault()

    if (!email) {
      toast.error("Enter your email address first!")
      return
    }
    resetPassword(email)
      .then(() => {
        setLoading(false)
        toast.success("Password reset email send ! Please check your email....")
      })
      .catch((error) => {
        console.log(error.message);

      })
  }


  return (
    <form onSubmit={handleLogin} className='flex justify-center min-h-screen my-30 items-center '>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body border rounded-2xl shadow-2xl">
          <h1 className="text-5xl font-bold my-5">Login now!</h1>
          <fieldset className="fieldset space-y-3 ">

            {/* Email */}
            <div className='space-y-2'>
              <label className="label">Email</label>
              <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} className="input w-full" placeholder="Email" />
            </div>
            {/* Password */}
            <div className='space-y-2 relative'>
              <label className="label">Password</label>
              <input type={show ? "text" : "password"} name='password' className="input w-full" placeholder="Password" />
              <span onClick={() => setShow(!show)} className='absolute right-2 top-10 cursor-pointer z-50'>
                {show ? <FaEye /> : <IoEyeOff />}
              </span>
              <button onClick={handleForgetPassword} className="link link-hover" >Forgot password?</button>
            </div>

            <button className="btn btn-neutral mt-4">Login</button>
            <button
              type='button'
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-info bg-white text-black border-[#e5e5e5] my-3">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
            <p className='font-semibold text-sm text-center mt-2'>Don't Have An Account ? Please <Link
              to={"/auth/register"} className='text-primary'> Register </Link> </p>
          </fieldset>
        </div>
      </div>
    </form>
  );
};

export default Login;