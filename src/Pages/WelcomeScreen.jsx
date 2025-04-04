import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Github, Globe, User } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

const BackgroundEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 blur-2xl animate-float" />
  </div>
);

const IconButton = ({ Icon }) => (
  <div className="relative group hover:scale-110 transition-transform duration-300">
    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-300" />
    <div className="relative p-2 sm:p-3 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
    </div>
  </div>
);

const RingLoader = () => (
  <div className="flex justify-center items-center relative w-[200px] h-[200px] mx-auto">
    <div className="absolute w-[190px] h-[190px] border border-transparent rounded-full border-b-8 border-b-[rgb(255,141,249)] animate-[rotate1_2s_linear_infinite]" 
      style={{
        transform: 'rotateX(50deg) rotateZ(110deg)',
        animation: 'rotate1 2s linear infinite'
      }} />
    <div className="absolute w-[190px] h-[190px] border border-transparent rounded-full border-b-8 border-b-[rgb(255,65,106)] animate-[rotate2_2s_linear_infinite]"
      style={{
        transform: 'rotateX(20deg) rotateY(50deg) rotateZ(20deg)',
        animation: 'rotate2 2s linear infinite'
      }} />
    <div className="absolute w-[190px] h-[190px] border border-transparent rounded-full border-b-8 border-b-[rgb(0,255,255)] animate-[rotate3_2s_linear_infinite]"
      style={{
        transform: 'rotateX(40deg) rotateY(130deg) rotateZ(450deg)',
        animation: 'rotate3 2s linear infinite'
      }} />
    <div className="absolute w-[190px] h-[190px] border border-transparent rounded-full border-b-8 border-b-[rgb(252,183,55)] animate-[rotate4_2s_linear_infinite]"
      style={{
        transform: 'rotateX(70deg) rotateZ(270deg)',
        animation: 'rotate4 2s linear infinite'
      }} />
    <div className="text-white text-lg font-medium">loading</div>
  </div>
);

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#030014] flex flex-col justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          <BackgroundEffect />
          
          <div className="relative w-full flex flex-col items-center justify-center px-4">
            {/* Icons - Centered above the loader */}
            <motion.div 
              className="flex justify-center gap-4 mb-8"
              variants={childVariants}
            >
              {[Code2, User, Github].map((Icon, index) => (
                <div key={index} data-aos="fade-down" data-aos-delay={index * 200}>
                  <IconButton Icon={Icon} />
                </div>
              ))}
            </motion.div>

            {/* Ring Loader - Centered */}
            <motion.div
              variants={childVariants}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <RingLoader />
            </motion.div>
          </div>
          
          {/* CSS Animations */}
          <style jsx global>{`
            @keyframes rotate1 {
              from {
                transform: rotateX(50deg) rotateZ(110deg);
              }
              to {
                transform: rotateX(50deg) rotateZ(470deg);
              }
            }
            @keyframes rotate2 {
              from {
                transform: rotateX(20deg) rotateY(50deg) rotateZ(20deg);
              }
              to {
                transform: rotateX(20deg) rotateY(50deg) rotateZ(380deg);
              }
            }
            @keyframes rotate3 {
              from {
                transform: rotateX(40deg) rotateY(130deg) rotateZ(450deg);
              }
              to {
                transform: rotateX(40deg) rotateY(130deg) rotateZ(90deg);
              }
            }
            @keyframes rotate4 {
              from {
                transform: rotateX(70deg) rotateZ(270deg);
              }
              to {
                transform: rotateX(70deg) rotateZ(630deg);
              }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;