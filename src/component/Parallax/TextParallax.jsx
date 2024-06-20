import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'

import { wrap } from 'framer-motion'

const TextParallax = ({ children, baseVelocity }) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(6, -36, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */

    let value = parseFloat(x.current)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    } else if (value < -35) {
      directionFactor.current = -1
    } else if (value > 5) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className='overflow-hidden tracking-tight leading-3 m-0 whitespace-nowrap flex flex-nowrap'>
      {/* <motion.div></motion.div> */}
      <motion.div
        className='text-3xl flex whitespace-nowrap flex-nowrap'
        style={{ x }}>
        {children.map((val, key) => (
          <span key={key} className='block mr-8'>
            {val}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default TextParallax
