import { motion } from 'framer-motion'
import myImage from '../../assets/images/hero-white.png'
import project1 from '../../assets/images/projects/atp.png'
import project2 from '../../assets/images/projects/neop.png'
import { useState } from 'react'
import './home.css'

const buttonVariants = {
  hover: {
    y: 8,
  },
  unhover: {
    y: 0,
  },
}
export const Home = () => {
  const [isHoverButton, setHoverButton] = useState(false)

  return (
    <div>
      <div className='fixed top-0 left-0 right-0 bottom-0 z-0'>
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
      </div>
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
        <img src={myImage} alt='' className='w-full h-full' />
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

      <section className='h-[100vh] relative z-10'>
        <div className='flex flex-col'>
          <h1 className='pl-72 text-3xl antialiased font-semibold py-4'>
            projects highlight
          </h1>
          <div className='flex flex-col gap-y-10'>
            <div className='px-32'>
              <motion.div className='grid grid-cols-12 group cursor-pointer py-12 rounded-md bg-white relative shadow-md shadow-sky-200'>
                <div className='col-span-6 flex items-center'>
                  <div className='w-1/4 flex justify-center text-lg'>01</div>
                  <div className='w-3/4 flex-col'>
                    <div className='flex flex-col gap-y-4'>
                      <span className='text-2xl'>Assessment Performance</span>
                      <div className='flex gap-x-2'>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          Tailwind
                        </div>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          AlpineJS
                        </div>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          Livewire
                        </div>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          Laravel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='w-3/4 relative'>
                    <div className='absolute  h-[30vh] rounded-md shadow-md -translate-y-10 opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-all duration-300 group-hover:-translate-y-16 shadow-sky-300'>
                      <img src={project1} alt='' />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className='px-32'>
              <motion.div className='grid grid-cols-12 group cursor-pointer py-12 rounded-md bg-white relative shadow-md shadow-sky-200'>
                <div className='col-span-6 flex items-center'>
                  <div className='w-1/4 flex justify-center text-lg'>01</div>
                  <div className='w-3/4 flex-col'>
                    <div className='flex flex-col gap-y-4'>
                      <span className='text-2xl'>Optimation document</span>
                      <div className='flex gap-x-2'>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          Tailwind
                        </div>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          AlpineJS
                        </div>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          Livewire
                        </div>
                        <div className='text-sm px-4 py-1 rounded-full border-2 bg-white font-semibold text-gray-700'>
                          Laravel
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='w-3/4 relative'>
                    <div className='absolute  h-[30vh] rounded-md shadow-md -translate-y-10 opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-all duration-300 group-hover:-translate-y-16 shadow-sky-300'>
                      <img src={project2} alt='' />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
