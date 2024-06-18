import { useState } from 'react'
import { motion } from 'framer-motion'
const buttonVariants = {
  hover: {
    y: 8,
  },
  unhover: {
    y: 0,
  },
}

const About = ({ image }) => {
  const [isHoverButton, setHoverButton] = useState(false)
  return (
    <section className='flex flex-col'>
      <div className='pl-72 pr-[30rem] z-10 flex flex-col pt-16 gap-y-4 tracking-wider'>
        <h1 className='text-3xl antialiased font-semibold'>about me</h1>
        <h2 className='text-lg  antialiased font-sans  leading-relaxed'>
          I am Ibnu Hajar A, a Full Stack Web Developer based in Jakarta,
          Indonesia. I&apos;m highly enthusiastic about web programming, with
          two years of hands-on experience, passionate about continuous learning
          and staying current with industry trends to drive innovation and
          improve processes.
        </h2>
      </div>
      <div className='flex w-full justify-start pl-52 mt-8'>
        <div className='flex flex-col gap-y-2 text-md w-80 px-4 relative z-10 py-1 rounded-sm shadow-sky-400 hover:shadow-md hover:shadow-sky-300 hover:-translate-x-4 hover:-translate-y-2 transition-all cursor-pointer'>
          <span className='text-center tracking-wider text-sm'>
            Whether you think you can or you think you can’t, you’re right.
          </span>
          <span className='text-center font-semibold'>-Henry Ford-</span>
        </div>
      </div>
      <div className='bg-contain absolute z-10 right-0 top-[10vh] w-[35rem] h-[35rem]'>
        <img src={image} alt='' className='w-full h-full' />
      </div>
      <div className='flex justify-center py-16 relative z-20'>
        <motion.button
          className='w-14 h-14 rounded-full flex items-center justify-center text-xs flex-col gap-y-2 cursor-pointer bg-gradient-to-r from-sky-300 to-sky-500 shadow-md shadow-slate-300'
          onHoverStart={() => setHoverButton(true)}
          onHoverEnd={() => setHoverButton(false)}>
          <motion.i
            className='fas fa-arrow-down text-2xl text-white'
            initial={false}
            animate={isHoverButton ? 'hover' : 'unhover'}
            variants={buttonVariants}></motion.i>
        </motion.button>
      </div>
    </section>
  )
}

export default About
