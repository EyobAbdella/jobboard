import axios from "axios";
import { useMutation } from "react-query";
import { API_URL } from "../config";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const inputClassName =
  "outline-none border border-gray-300 p-2 rounded placeholder:text-gray-700 w-full";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
  });

  const mutation = useMutation(
    (data) => axios.post(`${API_URL}/auth/jwt/create/`, data),
    {
      onSuccess: (data) => console.log(data),
      onError: (error) => console.log(error),
    }
  );
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    if (email === "") {
      errors.email = true;
      hasErrors = true;
    }

    if (password === "") {
      errors.password = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({
      email: false,
      password: false,
    });
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <div className='w-full mx-auto sm:max-w-lg sm:mt-10 flex flex-col justify-center gap-y-4 sm:shadow-inner sm:border rounded-xl shadow-slate-50 sm:bg-slate-50 p-5'>
      <div className='absolute top-2 left-5'>Logo</div>
      <h1 className='text-3xl text-center mt-14 sm:mt-4 mb-2'>Sign In</h1>
      <form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
        <div>
          <input
            className={`${inputClassName} ${
              formErrors.email
                ? " border-red-500"
                : "focus:ring-1 ring-indigo-400"
            }`}
            type='email'
            value={email}
            onChange={(e) => onChange(e)}
            placeholder='Email Address'
            name='email'
          />
          {formErrors.email && (
            <span className='text-sm text-red-500 ml-1'>Email is required</span>
          )}
        </div>

        <div>
          <input
            className={`${inputClassName} ${
              formErrors.password
                ? " border-red-500"
                : "focus:ring-1 ring-indigo-400"
            }`}
            type='password'
            value={password}
            onChange={(e) => onChange(e)}
            placeholder='Password'
            name='password'
          />
          {formErrors.password && (
            <span className='text-sm text-red-500 ml-1'>
              Password is required
            </span>
          )}
        </div>

        <button
          disabled={mutation.isLoading}
          className={`p-3 rounded ${
            mutation.isLoading
              ? "bg-indigo-300 text-gray-500"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }`}>
          {mutation.isLoading ? (
            <l-mirage size='70' speed='2.5' color='white'></l-mirage>
          ) : (
            <p>Login</p>
          )}
        </button>
      </form>
      <div className='gap-x-2 flex mx-auto'>
        <p>have an account</p>
        <Link
          to='/signup'
          className='text-blue-700 hover:underline cursor-pointer'>
          sign up
        </Link>
      </div>
      <div className='mx-auto flex items-center gap-x-3'>
        <span className='border-b pt-1 w-40 border-gray-400'></span>
        <p className='text-lg'>or</p>
        <span className='border-b pt-1 w-40 border-gray-400'></span>
      </div>
      <div
        // onClick={continueWithGoogle}
        className='text-lg flex items-center gap-x-3 border border-gray-500 hover:border-blue-900 p-1.5 min-w-[300px] justify-center mx-auto rounded-lg cursor-pointer'>
        <FcGoogle size={28} />
        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default Login;
