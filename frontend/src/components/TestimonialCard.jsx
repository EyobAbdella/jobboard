import { Avatar } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Image from "../assets/profile.png";

const TestimonialCard = () => {
  return (
    <div className='relative text-gray-700 h-[270px] w-96'>
      <div className='pl-4 absolute top-0'>
        <Avatar alt='John' src={Image} sx={{ width: 95, height: 95 }} />
      </div>
      <div className='mt-12 bg-slate-100 px-6 rounded-md h-[250px] w-[370px] sm:w-96 flex flex-col justify-center'>
        <FormatQuoteIcon sx={{ fontSize: 60, color: "#3b82f6", ml: "auto" }} />
        <div className='flex items-center gap-x-4'>
          <h1 className='text-lg font-semibold'>John Smith</h1>
          <p className='font-mono text-sm text-gray-500'>Web Developer</p>
        </div>

        <p className='text-sm px-1 mt-2 text-gray-500 font-sans'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          repudiandae illo laborum accusantium culpa consectetur quas obcaecati
          sunt amet earum ex aliquam, dolorum ullam accusamus animi quo ratione
          totam quod?
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
