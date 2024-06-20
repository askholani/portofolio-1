import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Project = ({ value, index }) => {
  const ref = useRef(null)
  const { image, stack, name } = value
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const translateXProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ['0', '128px'],
  )

  return (
    <motion.div
      ref={ref}
      // className='px-32'
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        translateX: translateXProgress,
      }}>
      <div className='grid grid-cols-12 group cursor-pointer py-12 rounded-md bg-white relative shadow-md w-4/5'>
        <div className='col-span-6 flex items-center'>
          <div className='w-1/4 flex justify-center text-lg'>0{index + 1}</div>
          <div className='w-3/4 flex-col'>
            <div className='flex flex-col gap-y-4'>
              <span className='text-2xl capitalize'>{name}</span>
              <div className='flex gap-x-2'>
                {stack.map((value, index) => (
                  <div
                    key={index}
                    className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1'></div>
        <div className='col-span-5 h-full relative flex items-center justify-center'>
          <div className='absolute w-[80%]  rounded-md shadow-md opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-all duration-300 group-hover:scale-105 shadow-sky-300 bg-contain'>
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Project
