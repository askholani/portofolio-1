import { motion } from 'framer-motion'

const Background = () => {
  return (
    <section className='fixed top-0 left-0 right-0 bottom-0 z-0'>
      <div className='fixed right-20 bottom-10'>
        <div className='w-10 h-10  border-sky-600 rounded-full border-2 flex justify-center items-center'>
          <i className='fas fa-arrow-up text-sky-600'></i>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-96 h-96'>
          <motion.div
            className='magicpattern opacity-40 blur-2xl'
            initial={{ y: 0 }}
            animate={{ y: [0, 500, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
        </div>
      </div>
      <div className='w-full flex justify-end'>
        <div className='w-96 h-96'>
          <motion.div
            className='magicpattern opacity-40 blur-2xl'
            initial={{ y: 0 }}
            animate={{ y: [0, -500, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  )
}

export default Background
