import Image from 'next/image'
import Link from 'next/link'
import React,{useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import NavLogo from '../public/assets/logo.png';


const Navbar = () =>{

    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg] = useState('#fff');
    const [linkColor] = useState('#1476f2');
  
    const handleNav = () => {
      setNav(!nav);
    };
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);
  
    return (
      <div style={{ backgroundColor: `${navBg}` }} className={shadow ?'fixed w-full h20 shadow-xl z-[100] ease-in-out duration-300'
                                                                       : 'fixed w-full h-20 z-[100]'}>
                <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href='#home'>
                <a>
                  <Image
                    src={NavLogo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                </a>
              </Link>
                    <div>
                        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:boarder-b"><Link href='/'>Home</Link></li>
                            </Link>
                            
                            <Link href="/">
                                <li className="ml-10 text-sm uppercase hover:boarder-b"><Link href='/#about'>About</Link></li>
                            </Link>
                        </ul>
                        <div style={{ color: `${linkColor}` }}
                            onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size={25}/>
                        </div>
                    </div>
                </div>
            <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':''}>
                    <div className={nav ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#fff] p-10 ease-in duration-500'
                                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                                    }
                    >
                        <div>
                            <div className='flex w-full items-center justify-between'>
                            <Image
                                src={NavLogo} 
                                    alt="/" 
                                    width="87"
                                    height="35"
                                />
                                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-auto'>
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className='border-b boader-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>Through hard work to the stars</p>
                            </div>
                        </div>

                        
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link href="/#home">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        Home
                                    </li>
                                </Link>
                                
                                <Link href="/#about">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                                        About
                                    </li>
                                </Link>
                            </ul>
                            <div className="pt-40">
                                <p className="uppercase tracking-widest text-[#1476f2]">Let&#39;s Connect</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                    
                                    <a
                                      href='https://www.linkedin.com/in/Siyabonga-Kubheka/'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <FaLinkedinIn/>
                                        </div>
                                    </a>
                                    
                                    <a
                                      href='https://github.com/'
                                      target='_blank'
                                      rel='noreferrer'
                                    >
                                        <div className="rounded-full shadow-lg  shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub/>
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
                </div>
            </div>
    )
}

export default Navbar