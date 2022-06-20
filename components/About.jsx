import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#1476f2]'>
            About
          </p>
          <h2 className='py-4 text-[#1476f2]'>Why SOVTECH</h2>
         
          <p className='py-2 text-gray-600'>
            I've selected key companies whose mission statements are inline with my values and goals, Where I know I could be excited about what the company does,
            and SovTech is very high on my list of desirable choices. I also see this opportunity as a way to contribute to the leading software development company in Africa to provide a 
            complete software design and development service. </p>
          <p className='py-2 text-gray-600'>
            I believe I have all the qualities and skills requred for being a developer at SovTech. And I can see that in this role, My skills could help solve problems within SovTech.
            I also see an opportunity for me to learn, grow, and gain a new skill-set. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
