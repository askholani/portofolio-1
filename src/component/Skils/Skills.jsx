import TextParallax from '../Parallax/TextParallax'

const skills = [
  'Javascript',
  'PHP',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'ReactJS',
  'NextJS',
  'ExpressJS',
  'Laravel',
  'TailwindCSS',
  'Livewire',
  'AlpineJS',
  'CI/CD',
]

const Skills = () => {
  return (
    <section className='relative py-[10vh] flex flex-col'>
      <TextParallax baseVelocity={-7}>{skills}</TextParallax>
    </section>
  )
}

export default Skills
