import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "ldrs/mirage";
import { API_URL } from "../config";
import axios from "axios";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

const inputClassName =
  "outline-none border border-gray-300 p-2 rounded placeholder:text-gray-700 w-full";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000/google`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {
      console.log(err);
    }
  };

  const mutation = useMutation(
    (user) => axios.post(`${API_URL}/auth/users/`, user),
    {
      onSuccess: () => navigate("/verify"),

      onError: (error) => {
        const { response } = error;
        if (response && response.data) {
          const errorData = response.data;
          Object.keys(errorData).forEach((field) => {
            const fieldErrors = errorData[field];
            fieldErrors.forEach((errorMsg) => {
              toast.error(errorMsg);
            });
          });
        }
      },
    }
  );
  const { firstName, lastName, email, password } = formData;
  const onSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    if (firstName === "") {
      errors.firstName = true;
      hasErrors = true;
    }

    if (lastName === "") {
      errors.lastName = true;
      hasErrors = true;
    }

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
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    });
    mutation.mutate({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });
  };
  return (
    <div className='w-full mx-auto sm:max-w-lg sm:mt-10 flex flex-col justify-center gap-y-4 sm:shadow-inner sm:border rounded-xl shadow-slate-50 sm:bg-slate-50 p-5'>
      <div className='absolute top-2 left-5'>Logo</div>
      <h1 className='text-3xl text-center mt-14 sm:mt-4 mb-2'>
        Create an Account
      </h1>
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
              formErrors.firstName
                ? " border-red-500"
                : "focus:ring-1 ring-indigo-400"
            }`}
            type='text'
            value={firstName}
            onChange={(e) => onChange(e)}
            placeholder='First Name'
            name='firstName'
          />
          {formErrors.firstName && (
            <span className='text-sm text-red-500 ml-1'>
              First name is required
            </span>
          )}
        </div>
        <div>
          <input
            className={`${inputClassName} ${
              formErrors.lastName
                ? " border-red-500"
                : "focus:ring-1 ring-indigo-400"
            }`}
            type='text'
            value={lastName}
            onChange={(e) => onChange(e)}
            placeholder='Last Name'
            name='lastName'
          />
          {formErrors.lastName && (
            <span className='text-sm text-red-500 ml-1'>
              Last name is required
            </span>
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
            <p>Sign Up</p>
          )}
        </button>
      </form>
      <div className='gap-x-2 flex mx-auto'>
        <p>Already have an account</p>
        <Link
          to='/login'
          className='text-blue-700 hover:underline cursor-pointer'>
          Login
        </Link>
      </div>
      <div className='mx-auto flex items-center gap-x-3'>
        <span className='border-b pt-1 w-40 border-gray-400'></span>
        <p className='text-lg'>or</p>
        <span className='border-b pt-1 w-40 border-gray-400'></span>
      </div>
      <div
        onClick={continueWithGoogle}
        className='text-lg flex items-center gap-x-3 border border-gray-500 hover:border-blue-900 p-1.5 min-w-[300px] justify-center mx-auto rounded-lg cursor-pointer'>
        <FcGoogle size={28} />
        <p>Continue with Google</p>
      </div>
    </div>
  );
};

export default SignUp;
