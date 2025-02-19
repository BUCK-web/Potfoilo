import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import gsap from "gsap";



const Hero = () => {
  const ballRef = useRef(null)
  const textRef = useRef(null)  
  
  useEffect(() => {
    if (ballRef.current && textRef.current) {
      gsap.fromTo(
        ballRef.current,
        { opacity: 0, y: 400 },
        { delay: 1.5, opacity: 1, y: 0, duration: 2 }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 200 },
        { delay: 1.5, opacity: 1, y: 0, duration: 1 }
      );
    }
  }, []);

  return (
      <section className='relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center bg-no-repeat'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5  rounded-full bg-[#7764a1]' ref={ballRef}/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
            <div>
              <div className='overflow-hidden'>
                <h1 className={`${styles.heroHeadText}`}>Hi I'm <div ref={textRef} className="inline-block">
                <span className="text-[#915eff]">Shokat</span>
              </div></h1>
              </div>
              <p className={`${styles.heroSubText} mt-2 text-white-100 `}>I Devlop 3D Visuals , user <br className='sm:block hidden' /> interfaces and web applications</p>
            </div>
        </div>
            <ComputersCanvas/>
            <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center' >
              <a href="#about">
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y:[0,24,0]
                  }}
                  transition={{
                    duration:1.5,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType:'loop'
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
                </div>

              </a>
            </div>
      </section>
  )
}

export default Hero