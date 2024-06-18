import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export const Experiment = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const translateX = useTransform(scrollYProgress, [0, 1], ['0', '1000px'])

  return (
    <section className='relative z-10 h-[200vh] pt-20 bg-gray-100'>
      <div
        ref={ref}
        className='flex flex-col h-[100vh] items-center justify-center'>
        <motion.h1
          className='text-3xl antialiased font-semibold py-4 absolute left-0'
          style={{ translateX }}>
          Projects Highlight
        </motion.h1>
        <div className='h-[150vh]'></div>
      </div>
    </section>
  )
}

export default Experiment
