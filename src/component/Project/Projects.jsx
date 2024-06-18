import Project from './Project'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Projects = ({ projectArr }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0.2 1', '1.1 1'],
  })
  const translateX = useTransform(scrollYProgress, [0, 1], ['0', '288px'])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1])

  return (
    <section ref={ref} className='relative z-10 h-[130vh] overflow-hidden'>
      <div className='flex flex-col'>
        <motion.h1
          style={{ translateX, opacity: opacityProgress }}
          className='text-3xl antialiased font-semibold py-4'>
          projects highlight
        </motion.h1>
        <div className='flex flex-col gap-y-12 overflow-hidden py-8'>
          {projectArr.map((value, index) => (
            <Project key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
