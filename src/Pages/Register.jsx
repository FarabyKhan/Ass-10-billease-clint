import React, { use, useState } from 'react';

import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { data, Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';




const Register = () => {

    const { setUser, createUser, signInWithGoogle, updateUser, setLoading } = use(AuthContext)

    const [show, setShow] = useState(false)
    const [nameError, setNameError] = useState("")
    const [passError, setPassError] = useState("")
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError('Name should be more then 5 character')
            return
        }
        else {
            setNameError("")
        }
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        const passRegEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passRegEx.test(password)) {
            setPassError("Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 6 characters long.")
            return;
        }
        else {
            setPassError("")
        }
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user
                toast.success('Signup successful! Please login now.', user);
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        const newUser = {
                            name,
                            email,
                            image: photoURL,
                        }
                        //create user in the database
                        fetch('http://localhost:3000/user', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                        .then(res=> res.json())
                        .then(data=>{
                            console.log('User save to the collection:',data); 
                               navigate("/")
                        })
                        .catch((err)=>{
                            console.error('Error saving user:',err)
                         
                        })
                    })
                    .catch((error) => {
                        toast.error(error.message)
                        setUser(user)
                    })

            })
            .catch((error) => {
                setLoading(false)
                toast.error(error.message)
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
            .then(error => {
                setLoading(false)
                console.log(error);

            })
    }


    return (


        <form onSubmit={handleRegister} className='flex justify-center min-h-screen my-30 items-center '>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body border rounded-2xl shadow-2xl">
                    <h1 className="text-5xl font-bold my-5">Register now!</h1>
                    <fieldset className="fieldset space-y-3 ">
                        {/* Name */}
                        <div className='space-y-2 '>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Name" required />
                            <p className='text-sm text-red-500 my-2'>{nameError}</p>
                        </div>
                        {/* PhotoURL */}
                        <div className='space-y-2'>
                            <label className="label">Photo URL</label>
                            <input type="text" name='photoURL' className="input w-full" placeholder="Photo URL" required />
                        </div>
                        {/* Email */}
                        <div className='space-y-2'>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        </div>
                        {/* Password */}
                        <div className='space-y-2 relative'>
                            <label className="label">Password</label>
                            <input type={show ? "text" : "password"} name='password' className="input w-full" placeholder="Password" required />
                            <span onClick={() => setShow(!show)} className='absolute right-2 top-10 cursor-pointer z-50'>
                                {show ? <FaEye /> : <IoEyeOff />}
                            </span>
                            <p className='text-sm text-red-500 my-2'>{passError}</p>
                        </div>

                        <button className="btn btn-neutral mt-4">Register</button>
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-outline btn-info bg-white text-black border-[#e5e5e5] my-3">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                        <p className='font-semibold text-sm text-center mt-2'>Already Have An Account ? Please <Link
                            to={"/auth/login"} className='text-primary'> Login</Link> </p>
                    </fieldset>
                </div>
            </div>
        </form>


    );
};

export default Register;