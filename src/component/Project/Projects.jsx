import Project from './Project'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Projects = ({ projectArr }) => {
  const ref = useRef(null)

  /**
   * 0 : refers to top of target element, this case tag section.
   * 1 : refers to bottom of viewport (the area of the web page is currently visible to the user).
   * viewport based on the device used by user, like laptop so when scroll on top of target element and bottom of viewport (laptop window) the scroll progress start.
   * 1.1 : refers to bottom + 10% from viewport of target element, this case tag section.
   * so when the scroll bottom of target + 10% from viewport the scroll progress end
   * scrollYprogress = 0 => top of target element meet bottom of viewport
   * scrollYprogress = 1 => bottom of target + 10 % viewport
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.1 1'],
  })
  const translateX = useTransform(scrollYProgress, [0, 0.7], ['0', '288px'])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 0.8])

  return (
    <section
      id='projects'
      ref={ref}
      className='relative z-10 py-[5vh] overflow-hidden min-h-[100vh]'>
      <div className='flex flex-col'>
        <motion.h1
          style={{ translateX, opacity: opacityProgress }}
          className='text-3xl antialiased font-semibold py-4 opacity-80'>
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
