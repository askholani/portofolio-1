import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const animate = {
  width: '100%',
}

export const Navbar = () => {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000)
    return () => clearInterval(timerId)
  }, [])
  const tick = () => {
    setTime(new Date())
  }
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <header className='h-[10vh] relative z-10'>
      <nav className='py-4 flex justify-between px-16'>
        <button className='flex flex-col'>
          <p className='font-semibold'>{time.toLocaleTimeString()}</p>
          <span className='h-1'></span>
        </button>
        <ul className='flex justify-center gap-x-12 font-semibold'>
          {['about', 'projects', 'contact'].map((item, index) => (
            <li
              onPointerDownCapture={(e) => e.stopPropagation()}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className='flex flex-col relative cursor-pointer'>
              <a href={`#${item}`} className='px-2'>
                {item}
              </a>
              {hoveredIndex === index && (
                <motion.span
                  initial='false'
                  animate={animate}
                  className='h-1 bg-sky-300 w-0 rounded-[1px]'></motion.span>
              )}
            </li>
          ))}
        </ul>
        <button className='flex flex-col'>
          {/* <span>Mode</span> */}
          <span className='h-1'></span>
        </button>
      </nav>
    </header>
  )
}
