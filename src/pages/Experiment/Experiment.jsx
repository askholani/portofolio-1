// import React from 'react'
import { motion, useScroll } from 'framer-motion'
import myImage from '../../assets/images/hero-white.png'
import { useRef } from 'react'

export const Experiment = () => {
  const { scrollYProgress } = useScroll()
  const scrollRef = useRef(null)
  console.log(scrollYProgress)

  return (
    <motion.section className='flex flex-col justify-start'>
      <motion.div
        className='fixed top-0 left-0 right-0 h-10 bg-blue-200'
        style={{
          scaleX: scrollYProgress,
          transformOrigin: 'left', // Set transform-origin to left
        }}
      />
      <div
        className='h-[200vh] relative'
        ref={scrollRef}
        style={{ overflow: 'scroll' }}>
        <motion.div
          className='bg-contain absolute z-10 right-0 top-[100vh] w-[35rem] h-[35rem]'
          initial={{ opacity: 1 }}
          whileInView={{
            rotate: 100,
            opacity: 1,
            transition: { duration: 5, type: 'spring', bounce: 0.4 },
          }}
          //  viewport={{ once: true }}
          viewport={{ root: scrollRef }}>
          <img src={myImage} alt='' className='w-full h-full' />
        </motion.div>
      </div>
    </motion.section>
  )
}
