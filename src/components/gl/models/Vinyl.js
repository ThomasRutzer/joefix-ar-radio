import { useGLTF } from "@react-three/drei"
import { animated } from "@react-spring/three"
import { useEffect, useRef } from "react"

import vinylGLTF from "./../../../assets/gltf/vinyl.glb"
import useStore from "../../../store"
import { APP_STATES } from "../../../config"
import { useFrame } from "@react-three/fiber"

const Vinyl = (props) => {
  const groupRef = useRef()
  const { scene } = useGLTF(vinylGLTF)
  const appStateRef = useRef()

  useEffect(() => useStore.subscribe(
    appState => (appStateRef.current = appState),
    state => state.appState
  ), [])

  useFrame(() => {
    if (appStateRef.current === APP_STATES.PLAY) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <animated.group
      {...props}
      ref={groupRef}
    >
      <primitive
        object={scene}
        scale={[1.9, 1.9, 1.9]}
        position={[0, 0.085, 0]}
        rotation={[-Math.PI / 2, 0, 0]}

      />
    </animated.group >
  )
}

export default Vinyl