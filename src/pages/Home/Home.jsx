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
      <About image={myImage} />
      <Projects projectArr={projects} />
      <Skills />
      <Contact />
    </>
  )
}
