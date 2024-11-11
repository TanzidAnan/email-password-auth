import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {

    const [success,setSuccess] =useState(false);
    const [errorMessag,setErrorMessage] =useState('');
    const emailRef =useRef()

    const hendleLogin =e =>{
        e.preventDefault();
        const email =e.target.email.value
        const password =e.target.password.value;
        console.log(email,password)
        setSuccess(false);
        setErrorMessage('')

        signInWithEmailAndPassword(auth, email,password)
        .then(result =>{
            console.log(result.user);
            if(result.user.emailVerified){
                setErrorMessage('Plice varify your email ')
            }
            else{
                setSuccess(true)
            }
        })
        .catch(error =>{
            console.log("ERROR:",error.message);
            setErrorMessage(error.message)
        })
    }

    const hendleForgetPassword = () =>{
        const email=emailRef.current.value;
        if(!email){
            alert('inter your email')
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(() =>{
                alert('resute')
            })
        }
    }
    return (
        <div>
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
                                <input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label onClick={hendleForgetPassword} className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        {
                            success &&<p>Success full login </p>
                        }
                        {
                            errorMessag && <p>{errorMessag}</p>
                        }

                        <p>Welcome to new to website <Link to='/singUp' className='text-red-500' >Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;