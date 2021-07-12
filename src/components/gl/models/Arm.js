import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"
import { animated, SpringValue } from "@react-spring/three"

import turntableGLTF from "./../../../assets/gltf/turntable.gltf"
import { APP_STATES } from "./../../../config"
import useStore from "./../../../store"

const Y_ROTATION_SOUND_ENDED = -0.45
const Y_ROTATION_PREPARED = -0.09

const Arm = props => {
  const rotationSpringValue = new SpringValue(Y_ROTATION_PREPARED)
  const groupRef = useRef()
  const currentSongDuration = useStore(state => state.currentSongDuration)
  const { nodes } = useGLTF(turntableGLTF)
  const appStateRef = useRef()

  useEffect(() => useStore.subscribe(
    appState => (appStateRef.current = appState),
    state => state.appState
  ), [])

  useFrame(() => {
    if (appStateRef.current === APP_STATES.PLAY) {
      rotationSpringValue.start({ 
        to: Y_ROTATION_SOUND_ENDED, 
        onChange: (x) => groupRef.current.rotation.y = x, 
        config: { duration: currentSongDuration } 
      })
    } else {
      rotationSpringValue.stop()
    }
  })

  return (
    <animated.group
      ref={groupRef}
      {...props}
      position={[0.41, 0.1, -0.27]} >
      <group position={[-0.41, -0.1, 0.15]}>
        <mesh
          geometry={nodes.player003.geometry}
          material={nodes.player003.material}
          castShadow
          receiveShadow
          position={[0.29, 0.1, 0.27]}
          rotation={[0, 1.03, 0]}
          scale={[0.04, 0.01, 0.01]}
        />
        <mesh
          geometry={nodes.Vert.geometry}
          material={nodes.Vert.material}
          castShadow
          receiveShadow
          position={[0.41, 0.1, -0.13]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.needke.geometry}
          material={nodes.needke.material}
          castShadow
          receiveShadow
        />
      </group>
    </animated.group >
  )
}

export default Arm
