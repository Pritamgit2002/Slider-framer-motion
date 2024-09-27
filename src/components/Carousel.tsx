"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-gray-500'];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? colors.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full flex justify-center items-center">
        {colors.map((color, index) => {
          const isCenter = index === currentIndex;
          const isLeft = index === (currentIndex - 1 + colors.length) % colors.length;
          const isRight = index === (currentIndex + 1) % colors.length;

          return (
            <motion.div
              key={index}
              className={`absolute w-80 h-96 ${color} flex-shrink-0 rounded-lg`}
              initial={{ scale: 0.5, opacity: 0.5 }}
              animate={{
                scale: isCenter ? 1.05 : 0.9,
                x: isCenter ? 0 : isLeft ? '-95%' : '95%',
                opacity: isCenter ? 1 : 0.5,
                zIndex: isCenter ? 1 : 0
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-40 left-0 right-0 flex justify-center space-x-40 text-4xl">
       
        <button
          onClick={nextSlide}
          className=" text-[#E05100] rounded-full shadow-md focus:outline-none"
        >
          <FaArrowLeftLong />

        </button>
        <button
          onClick={prevSlide}
          className=" text-[#E05100] rounded-full shadow-md focus:outline-none"
        >
          <FaArrowRightLong />

        </button>
      </div>
    </div>
  );
};

export default Carousel;
