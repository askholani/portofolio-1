const Contact = () => {
  return (
    <section
      id='contact'
      className='text-slate-700 py-[5vh] z-10 flex flex-col'>
      <h1 className='antialiased font-semibold py-4 px-72 text-3xl opacity-80'>
        contact
      </h1>
      <div className='px-32'>
        <div className='grid grid-cols-12 gap-x-8 bg-white relative px-10 py-8 rounded-md shadow-md'>
          <div className='col-span-6 flex flex-col gap-y-6'>
            <div className='flex flex-col h-full justify-between'>
              <div className='flex flex-col gap-y-2'>
                <div className='flex flex-col font-bold gap-x-2'>
                  <div className='flex gap-x-4'>
                    <span className='text-7xl text-sky-600'>Stay</span>
                    <span className='text-7xl'>In</span>
                  </div>
                  <span className='text-7xl'>Touch</span>
                </div>
                <span className='text-xs tracking-wide'>
                  I’m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision. Whether you have a
                  question or just want to say hi, feel free to drop a message.
                </span>
              </div>
              <div className='flex flex-col gap-y-4 py-4'>
                <div className='text-sm grid grid-cols-2'>
                  <a
                    href='mailto:askholani.ibnuhajar@gmail.com'
                    target='_blank'
                    rel='nofollow'
                    className='flex flex-col gap-y-1 col-span-1 cursor-pointer'>
                    <span className='uppercase opacity-70'>email :</span>
                    <span>askholani.ibnuhajar@gmail.com</span>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/askholani/'
                    className='flex flex-col gap-y-1 col-span-1'>
                    <span className='uppercase opacity-70 text-xs'>
                      LinkedIn
                    </span>
                    <span>@askholani</span>
                  </a>
                </div>
                <div className='text-sm grid grid-cols-2'>
                  <a
                    href='https://www.instagram.com/ibnu_hajara/'
                    className='flex flex-col gap-y-1 col-span-1'>
                    <span className='uppercase opacity-70 text-xs'>
                      Instagram
                    </span>
                    <span>@ibnu_hajara</span>
                  </a>
                  <a
                    href='https://github.com/askholani'
                    className='flex flex-col gap-y-1 col-span-1'>
                    <span className='uppercase opacity-70 text-xs'>Github</span>
                    <span>askholani</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-6 flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-8'>
              <span className='font-bold text-2xl'>
                Lets get to know each other
              </span>
              <form action='' className='flex flex-col gap-y-4 items-start'>
                <input
                  type='text'
                  id=''
                  className='bg-slate-50 px-4 py-2 rounded-md border-2 border-slate-300 font-semibold w-full focus:outline-none focus:bg-slate-100'
                  placeholder='Name'
                />
                <input
                  type='email'
                  id=''
                  className='bg-slate-50 px-4 py-2 rounded-md border-2 border-slate-300 font-semibold w-full focus:outline-none focus:bg-slate-100'
                  placeholder='Email'
                />
                <textarea
                  className='bg-slate-50 px-4 py-2 rounded-md border-2 border-slate-300 font-semibold w-full focus:outline-none focus:bg-slate-100'
                  placeholder='Message'
                />
                <button className='px-4 py-2 font-semibold bg-sky-400 text-white rounded-md hover:bg-sky-500'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
