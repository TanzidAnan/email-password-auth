import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.config';
import { BsChevronExpand, BsKeyFill } from "react-icons/bs";


const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMesseg, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const hendleSingUp = (e) => {
        e.preventDefault();
        const email = (e.target.email.value)
        const password = (e.target.password.value)

        setErrorMessage('');
        setSuccess(false)
        if (password.length < 6) {
            setErrorMessage('6 carect password longer');
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);


            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
                setSuccess(true)
            })
    }


    return (
        <div>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
                <h1 className="text-3xl font-bold">Sign up</h1>
                <form onSubmit={hendleSingUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'}

                            name='password' placeholder="password" className="input input-bordered" />
                        <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-2 top-12'>
                            {
                                showPassword ? <BsChevronExpand /> : <BsKeyFill />

                            }
                        </button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-3 cursor-pointer">
                        <input type="checkbox" defaultChecked className="checkbox" />
                            <span className="label-text">Accept our Terms and condations</span>
                            
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-rose-300 btn-primary">google</button>
                    </div>
                </form>
                {
                    errorMesseg && <p className='text-2xl text-red-400'>{errorMesseg}</p>
                }
                {
                    success && <p>success full creact user</p>
                }
            </div>
        </div>
    );
};

export default SignUp;