import './Footer.css'
import logo from '../../../../public/images/logo.png'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import { AiTwotoneEnvironment } from 'react-icons/ai';

const Footer = () => {
   return (
      <footer className='bg-[#3D3D47]'>
         <div className='max-w-[1140px] mx-auto'>
            <div className='flex lg:flex-row flex-col justify-between gap-5'>
               <div className='lg:w-[40%] w-full footerBar'>
                  <Link href="/">
                     <img src={logo} alt="" className="lg:w-[80px] w-[70px] lg:mx-0 mx-auto rounded-full" />
                  </Link>
                  <h3 className='text-amber-400'>Deep Thought</h3>
                  <p>Deep Thought is a powerful supercomputer depicted in Douglas Adams The Hitchhikers Guide to the Galaxy.Deep Thought is an enigmatic entity known for its profound intellect and philosophical ponderings.</p>
               </div>

               <div className='lg:w-[30%] w-full footerBar mb-8'>
                  <h2>CONTACT INFO</h2>
                  <div className='lg:mb-7 mb-10'>
                     <FaPhoneAlt className='footerIcon' />
                     <h3>987 999 0990</h3>
                  </div>
                  <div className='lg:mb-7 mb-10'>
                     <BsEnvelopeFill className='footerIcon' />
                     <h3>info@gmail.com</h3>
                  </div>
                  <div className=''>
                     <AiTwotoneEnvironment className='footerIcon' />
                     <h3> Pitter plaza, Piltite 300, Fort Worth, ToX, 137, Canada</h3>
                  </div>
               </div>
               <div className='lg:w-[30%] w-full footerBar'>
                  <h2>QUICK LINKS</h2>
                  <ul>
                     <li><Link>Home</Link></li>
                     <li><Link>Instructors</Link></li>
                     <li><Link>Classes</Link></li>
                     <li><Link>Login</Link></li>
                  </ul>
               </div>
               <div className='lg:w-[30%] w-full footerBar'>
                  <h2>About Deep Thought</h2>
                  <ul>
                     <li><Link>About Us</Link></li>
                     <li><Link>Our Partners</Link></li>
                     <li><Link>Careers</Link></li>
                     <li><Link>Our Staff</Link></li>
                  </ul>
               </div>
            </div>
            <div className='copyRight'>
               <p>@ Copyright 2023 to 2026 by Deep Thought</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;