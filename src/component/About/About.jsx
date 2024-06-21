const About = ({ image }) => {
  return (
    <section
      className='flex flex-col relative min-h-[100vh] py-[5vh] gap-y-8'
      id='about'>
      <div className='pl-72 pr-[30rem] z-10 flex flex-col  gap-y-4 tracking-wider relative pt-16'>
        <h1 className='text-3xl antialiased font-semibold'>about me</h1>
        <h2 className='text-lg  antialiased font-sans  leading-relaxed'>
          I am Ibnu Hajar A, a Full Stack Web Developer based in Jakarta,
          Indonesia. I&apos;m highly enthusiastic about web programming, with
          two years of hands-on experience, passionate about continuous learning
          and staying current with industry trends to drive innovation and
          improve processes.
        </h2>
      </div>
      <div className='bg-contain absolute z-10 right-0 top-[10vh] w-[35rem] h-[35rem]'>
        <img src={image} alt='' className='w-full h-full' />
      </div>
    </section>
  )
}

export default About
