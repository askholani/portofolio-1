import myImage from '../../assets/images/hero-white.png'
import project1 from '../../assets/images/projects/atp.png'
import project2 from '../../assets/images/projects/neop.png'
import project3 from '../../assets/images/projects/commerce.png'
import './home.css'
import Projects from '../../component/Project/Projects'
import About from '../../component/About/About'
import Background from '../../component/Background/Background'
import Skills from '../../component/Skils/Skills'
import Contact from '../../component/Contact/Contact'
import Hero from '../../component/Hero/Hero'

const projects = [
  {
    name: 'assessment performance',
    image: project1,
    stack: ['TailwindCSS', 'AlpineJS', 'Livewire', 'Laravel'],
  },
  {
    name: 'optimation document',
    image: project2,
    stack: ['TailwindCSS', 'AlpineJS', 'Livewire', 'Laravel'],
  },
  {
    name: 'e-commerce',
    image: project3,
    stack: ['TailwindCSS', 'NextJS', 'ExpressJS', 'Prisma'],
  },
]

export const Home = () => {
  return (
    <>
      <Background />
      <div className='fixed right-20 bottom-10 z-30'>
        <a
          href='#hero'
          className='w-10 h-10  border-sky-600 rounded-full border-2 flex justify-center items-center'>
          <i className='fas fa-arrow-up text-sky-600'></i>
        </a>
      </div>
      <Hero />
      <About image={myImage} />
      <Projects projectArr={projects} />
      <Contact />
      <Skills />
    </>
  )
}
