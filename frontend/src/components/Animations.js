import React from 'react';
import { useSpring, animated } from 'react-spring';

const Animations = () => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props}>
      {/* Add your animation content here */}
    </animated.div>
  )
}

export default Animations;