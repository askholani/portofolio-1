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

const Hero = () => {
  const [isHoverButton, setHoverButton] = useState(false)
  return (
    <section id='hero' className='h-[90vh]'>
      <div className='flex flex-col gap-y-16 px-4 relative z-10 py-1 rounded-sm  justify-center items-center h-full w-full'>
        <div className='w-2/3 text-center hover:-translate-x-4 hover:-translate-y-2 transition-all cursor-pointer flex flex-col gap-y-8'>
          <span className='tracking-wider text-7xl'>
            &quot;Whether you think you can or you think you can’t, you’re
            right&quot;
          </span>
          <span className='text-4xl'>-someone-</span>
        </div>
        <motion.button
          onHoverStart={() => setHoverButton(true)}
          onHoverEnd={() => setHoverButton(false)}>
          <a
            href='#contact'
            className='w-14 h-14 rounded-full flex items-center justify-center text-xs flex-col gap-y-2 cursor-pointer bg-gradient-to-r from-sky-300 to-sky-500 shadow-md shadow-slate-300'>
            <motion.i
              className='fas fa-arrow-down text-2xl text-white'
              initial={false}
              animate={isHoverButton ? 'hover' : 'unhover'}
              variants={buttonVariants}></motion.i>
          </a>
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
