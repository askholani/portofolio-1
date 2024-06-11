import { Navbar } from '../Navbar/Navbar'
import { Loader } from '../../component/Loader/Loader'
import { useEffect, useState } from 'react'

export const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      <div className='bg-gradient-to-r from-sky-50 via-gray-50 to-sky-200 relative'>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}
