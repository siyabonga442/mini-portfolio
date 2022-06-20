import React from 'react';
import { GoBrowser } from 'react-icons/go';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        <p className='uppercase text-sm tracking-widest text-gray-600'>
            through hard work to the stars
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#1476f2]'> Siyabonga</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A  Software Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m a Junior Software Developer based in Johannesburg specializing in both front-end development and Back-end development. I have recently completed a National Diploma in IT(Software
            Development) with an uptitude of Software Development, Mobile Application Development, Web Development, Android Development, Software Testing, and Business Analysis and Modelling.
            I enjoy leaning about new Technologies and have a high passion for developing new applications and solving application problems.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/Siyabonga-Kubheka'
              target='_blank'
              rel="noreferrer"
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/siyabonga442' target='_blank' rel="noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            
            <a
                 href='https://www.jaftarsa.me/'
                target='_blank'
                rel='noreferrer'
            >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <GoBrowser/>
                </div>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
