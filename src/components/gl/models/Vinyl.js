import { useGLTF } from "@react-three/drei"
import { animated } from "@react-spring/three"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"

import vinylGLTF from "./../../../assets/gltf/vinyl.glb"
import useStore from "../../../store"
import { APP_STATES } from "../../../config"

const Vinyl = (props) => {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF(vinylGLTF)
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
    <animated.group {...props} ref={groupRef}>
      <group
        scale={[1.9, 1.9, 1.9]}
        position={[0, 0.1, 0]}
        rotation={[0, -Math.PI / 2, 0]}>
        <group position={[0, 0, 0]}>
          <group position={[0, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['buffer-0-mesh-0'].geometry}
              material={materials._Color_009_3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['buffer-0-mesh-0_1'].geometry}
              material={materials._Color_009_2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['buffer-0-mesh-0_2'].geometry}
              material={materials.Color_M00}
            />
          </group>
        </group>
      </group>
      {/* <primitive
        object={scene}
        scale={[1.9, 1.9, 1.9]}
        position={[0, 0.085, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      /> */}
    </animated.group >
  )
}

export default Vinyl
