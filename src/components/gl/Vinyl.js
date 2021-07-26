import { useGLTF } from "@react-three/drei"
import { animated } from "@react-spring/three"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"

import vinylGLTF from "./../../assets/gltf/Vinyl_disc.glb"
import useStore from "../../store"
import { APP_STATES } from "../../config"

const Vinyl = (props) => {
  const groupRef = useRef()
  const { nodes } = useGLTF(vinylGLTF)
  const appStateRef = useRef()

  useEffect(() => useStore.subscribe(
    appState => (appStateRef.current = appState),
    state => state.appState
  ), [])

  useFrame(() => {
    if (appStateRef.current === APP_STATES.PLAY) {
      groupRef.current.rotation.y += 0.02
    }
  })

  return (
    <animated.group {...props} ref={groupRef}>
      <group
        position={[0, 0.12, 0]}
        rotation={[0, -Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Disc.geometry}
          material={nodes.Disc.material}
          scale={[0.3, 0.001, 0.3]}
        />
      </group>
    </animated.group >
  )
}

export default Vinyl
