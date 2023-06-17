import './Banner_Section.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay } from "swiper";
import { Link } from 'react-router-dom';
import { Bounce, JackInTheBox, Slide } from 'react-awesome-reveal';

const Banner_Section = () => {

   return (
      <Swiper
         spaceBetween={30}
         centeredSlides={true}
         autoplay={{
            delay: 4000,
            disableOnInteraction: false,
         }}
         breakpoints={{
            320: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            577: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
            1024: {
               slidesPerView: 1,
               spaceBetween: 20,
            },
         }}
         // navigation={true}
         modules={[Autoplay]}
         className="mySwiper"
      >
         <SwiperSlide>
            <div className="w-full h-[100vh] slider relative">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                  <JackInTheBox>
                  </JackInTheBox>
                  <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Deep Thought</h2>
                  </Bounce>
                  <Slide>
                     <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>
                        Deep Thought is a transformative journey of introspection, wisdom, and enlightenment. Through contemplative practices, mindfulness, and profound inquiry, embark on a path of self-discovery, expanded awareness, and profound clarity of thought.</p>
                  </Slide>
                  <div className='lg:text-left text-center'>
                     <Link className='text-white px-12 py-3 bg-[#5bc77b] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-[100vh] slider2 relative ">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                  <JackInTheBox>
                  </JackInTheBox>
                  <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Deep Thought</h2>
                  </Bounce>
                  <Slide>
                     <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>Deep Thought is an immersive exploration of the profound. Through introspection, meditation, and contemplative practices, delve into the depths of consciousness, expand your understanding, and unlock the transformative power of deep, insightful thinking. Embark on a journey of intellectual and spiritual growth.</p>
                  </Slide>
                  <div className='lg:text-left text-center'>
                     <Link className='text-white px-12 py-3 bg-[#5bc77b] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-[100vh] slider3 relative ">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                  <JackInTheBox>
                  </JackInTheBox>
                  <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Deep Thought</h2>
                  </Bounce>
                  <Slide>
                     <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>Deep Thought is a sanctuary for profound contemplation and soulful reflection. Through mindfulness, introspective practices, and philosophical inquiry, unlock hidden insights, expand consciousness, and cultivate a rich inner world of wisdom and understanding. Embark on a transformative voyage of deep thought and self-discovery.</p>
                  </Slide>
                  <div className='lg:text-left text-center'>
                     <Link className='text-white px-12 py-3 bg-[#5bc77b] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                  </div>
               </div>
            </div>
         </SwiperSlide>
         <SwiperSlide>
            <div className="w-full h-[100vh] slider4 relative">
               <div className='lg:w-[60%] w-full absolute top-[50%] translate-y-[-50%] lg:left-24 left-0 px-5'>
                  <JackInTheBox>
                  </JackInTheBox>
                  <Bounce>
                     <h2 className='lg:text-[100px] text-[54px] lg:mb-0 mb-5 lg:text-left text-center text-white'>Deep Thought</h2>
                  </Bounce>
                  <Slide>
                     <p className='text-white lg:text-[20px] text-[18px] text-center lg:text-left font-medium lg:pr-6 pr-0 mb-10'>Deep Thought offers a sacred space for deep introspection and expansive wisdom. Through meditation, contemplation, and philosophical exploration, embark on a transformative odyssey to unravel the mysteries of existence, ignite profound insights, and cultivate profound inner growth. Journey into the depths of thought and awaken your true potential.</p>
                  </Slide>
                  <div className='lg:text-left text-center'>
                     <Link className='text-white px-12 py-3 bg-[#5bc77b] transition-all hover:bg-[#77ce53] font-bold rounded-lg '>SEE MORE</Link>
                  </div>
               </div>
            </div>
         </SwiperSlide>
      </Swiper>
   );
};

export default Banner_Section;