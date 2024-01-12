import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Testimonial = () => {
  let autoSlider = true;
  function sliderRight() {
    autoSlider = false;
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  }

  function sliderLeft() {
    autoSlider = false;

    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let slider = document.getElementById("slider");
      autoSlider && (slider.scrollLeft = slider.scrollLeft + 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-slate-50 bg-gradient-to-r lfrom-indigo-500 lvia-purple-500 lto-pink-500 bg-indigo-400 py-14 sm:py-28 px-1 flex flex-col items-center h-full w-full'>
      <h1 className='text-4xl mb-2 px-0.5 text-center font-semibold text-zinc-900'>
        Positive Feedback From Satisfied Candidates
      </h1>
      <p className='text-lg px-0.5 text-center'>
        What People Are Saying About the Service Provided by JobHunt.
      </p>
      <div
        id='slider'
        className='mt-8 flex items-center gap-x-8 overflow-x-scroll h-[340px] py-2 scrollbar-hide w-full scroll-smooth'>
        {Array.from({ length: 8 }).map((_, index) => (
          <TestimonialCard key={index} />
        ))}
      </div>
      <div className='flex items-center justify-between w-40 mt-5'>
        <div
          onClick={sliderLeft}
          className='rounded-full cursor-pointer hover:border-blue-300 border border-gray-300'>
          <ChevronLeftIcon fontSize='large' />
        </div>
        <div
          onClick={sliderRight}
          className='rounded-full cursor-pointer hover:border-blue-300 border border-gray-300'>
          <ChevronRightIcon fontSize='large' />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
