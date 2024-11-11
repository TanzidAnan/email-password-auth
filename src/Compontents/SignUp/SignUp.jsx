import React from 'react';

const SignUp = () => {

    const hendleSingUp =(e) =>{
        e.preventDefault();
        console.log(e.target.email.value)
        console.log(e.target.password.value)
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
                        <input type="email" name='email' placeholder="email" className="input input-bordered"/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-rose-300 btn-primary">google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;