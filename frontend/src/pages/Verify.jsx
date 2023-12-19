import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <div className='flex items-center h-screen'>
      <div className='flex flex-col items-center mx-auto max-w-md gap-4'>
        <div className='absolute top-2 left-5'>Logo</div>
        <h1 className='text-2xl font-semibold'>
          Verify your email to continue
        </h1>
        <p>
          We have recently sent an email to{" "}
          <span className='font-bold'>BerLkd32@gmail.com</span> To complete the
          verification process for your address, please take a moment to check
          your email and click on the link provided. Thank you for your
          cooperation.
        </p>
        <Link to='https://gmail.com'>
          <button className='text-white py-2 bg-indigo-600 hover:bg-indigo-700 rounded-full px-8'>
            Go to Gmail Inbox
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Verify;
