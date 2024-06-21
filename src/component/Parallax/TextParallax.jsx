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

  /**
   * dumping : controls the amount of resistance in the spring
   * Higher values of damping will slow down the oscillation more quickly
   * damping: 50 => making the animation smooth but not too bouncy
   */

  /**
   * stiffness : how quickly it tries to return to its original position.
   * A higher stiffness value will make the animation faster and more rigid.
   * stiffness: 40 => the spring is relatively soft, leading to a slower, more relaxed animation.
   */
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })

  /**
   * When smoothVelocity is 0, velocityFactor will be 0.
   * When smoothVelocity is 1000, velocityFactor will be 5.
   * choice 5000 is based on how velocity user scrolling site.
   * clamp: false means that the output value is not restricted to the output range.
   * smoothVelocity goes below 0 or above 5000, velocityFactor can go below 0 or above 5 respectively.
   */
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(10, -40, v)}%`)

  const directionFactor = useRef(1)
  useAnimationFrame((t, delta) => {
    /**
     * the callback bellow run amount 60 times per second, because standart in a browser has 60 FPS.
     */
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
    } else if (value < -37) {
      directionFactor.current = -1
    } else if (value > 4) {
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
