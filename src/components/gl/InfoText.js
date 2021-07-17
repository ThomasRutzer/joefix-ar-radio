import { useRef } from "react"
import { animated } from "@react-spring/three"
import { useFrame } from "@react-three/fiber"

import Text from "./Text"

let angleTextRef = 0
let angleTextRef1 = 0

const InfoText = props => {
  const textRef = useRef()
  const textRef1 = useRef()

  useFrame(() => {
    textRef.current.position.x += 0.001 * Math.cos(angleTextRef)
    textRef.current.position.z += 0.001 * Math.sin(angleTextRef)
    angleTextRef += 0.01

    textRef1.current.position.x += 0.001 * Math.cos(angleTextRef1)
    textRef1.current.position.z += 0.001 * Math.sin(angleTextRef1)
    angleTextRef1 -= 0.02
  })

  return (
    <animated.group
      {...props}
      position-y={-.2}
      position-x={1.4}>
      <Text
        ref={textRef}
        position={[-2, 1.8, 0]}
        rotation={[Math.PI / 4, Math.PI / 6, Math.PI / 24]}
        opacity={props.opacity}
        text="JOE" />
      <Text
        ref={textRef1}
        position={[-1.5, 1.3, 0]}
        rotation={[Math.PI / 4, - Math.PI / 8, 0]}
        opacity={props.opacity}
        text="FIX" />
    </animated.group>
  )
}

export default InfoText
