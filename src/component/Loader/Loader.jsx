import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const list = new Array(4).fill(null)
const variants = {
  active: {
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 1,
      delay: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
  inactive: {
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.2,
      staggerChildren: 0.2,
    },
  },
}

export const Loader = () => {
  const [isLoading, setLoading] = useState(true)
  const [x, setX] = useState(0)

  const itemVariants = {
    active: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    inactive: {
      opacity: 0,
      x: isLoading ? 200 : -200,
      transition: { duration: 0.1 },
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setX(10000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div>
      <motion.section
        className={`z-50 text-black flex justify-center items-center fixed top-0 bottom-0 right-0 left-0
      }`}>
        <motion.div className='flex absolute h-full w-full flex-col'>
          {list.map((name, key) => (
            <motion.div
              key={key}
              className='bg-white h-1/4'
              initial={{ opacity: 1 }}
              animate={{
                x: key % 2 === 0 ? x : -x,
                transition: { duration: 2.5, delay: 0.7 },
              }}></motion.div>
          ))}
        </motion.div>
        <motion.ul
          className='flex gap-x-4 relative z-50'
          initial='inactive'
          variants={variants}
          animate={isLoading ? 'active' : 'inactive'}>
          <motion.li variants={itemVariants} className='text-6xl font-bold'>
            Ibnu
          </motion.li>
          <motion.li variants={itemVariants} className='text-6xl font-bold'>
            Hajar
          </motion.li>
          <motion.li variants={itemVariants} className='text-6xl font-bold'>
            A
          </motion.li>
        </motion.ul>
      </motion.section>
    </motion.div>
  )
}
