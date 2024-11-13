import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";

const Login = () => {
    const [success,setSuccess] =useState(false);
    const [loginError,setLoginError] =useState('')

    const hendleLogin =(e) =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password)
        setSuccess(false)
        setLoginError('')

        signInWithEmailAndPassword(auth,email,password)
        .then(res =>{
            console.log(res.user)
            setSuccess(true)
            toast('success full login')
        })
        .catch(error =>{
            console.log(error.message)
            toast.error(error.message)
            setLoginError(error.message)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={hendleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        success && <p>Login success full</p>
                        
                    }
                    {
                        loginError&& <p>{loginError}</p>
                    }

                    <p className="flex p-3 gap-3">New to this website <p className="text-green-400"><NavLink to='/signup'>Sign up</NavLink></p></p>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;