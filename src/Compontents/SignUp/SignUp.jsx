import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";



const SignUp = () => {
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false)

    const hendleSignUp = (e) => {
        e.preventDefault()
        const email = (e.target.email.value);
        const password = (e.target.password.value);
        const temrs =e.target.terms.checked

        setErrorMessage('');
        setSuccess(false)

        if(!temrs){
            setErrorMessage('no accept');
            return;
        }
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('verfection password');
            return
        }

        if (password.length < 6) {
            setErrorMessage('password should be 6 carecter');
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
            })
            .catch(error => {
                console.log('ERROR:', error.message)
                setErrorMessage(error.message);
                setSuccess(false)
            })
    }
    return (
        <div className='max-w-lg mx-auto bg-teal-600 p-9 rounded-md'>
            <h1 className='text-black font-bold text-center text-2xl '>Sign Up</h1>
            <form onSubmit={hendleSignUp}>
                <div className='mt-7'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" name='email' className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mt-7">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type={showPassword ? 'text' : 'password'} name='password' className="grow" placeholder='password' required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn btn-xs">
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </button>
                    </label>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-black hover:text-red-900">Forgot password?</a>
                    </label>
                    <div className="form-control ">
                        <label className="label cursor-pointer justify-start gap-3">
                        <input type="checkbox" name='terms' className="checkbox" />
                            <span className="label-text text-black">Accecpt our temes</span>
                        </label>
                    </div>
                </div>
                <div className='mt-7'>
                    <button className="btn btn-block bg-green-300 text-black">Register </button>
                </div>
            </form>
            {
                errorMessage && <p className="text-red-800">{errorMessage}</p>
            }
            {
                success && <p className="text-green-700">User success full</p>
            }
        </div>
    );
};

export default SignUp;