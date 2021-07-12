import { useGLTF } from "@react-three/drei"
import { animated } from "@react-spring/three"

import turntableGLTF from "./../../../assets/gltf/turntable.gltf"

const Turntable = props => {
  const { nodes, materials } = useGLTF(turntableGLTF)

  return (
    <animated.group 
      {...props} 
      dispose={null} 
      >
      <mesh
        geometry={nodes.music_player.geometry}
        material={nodes.player_legs.material}
        castShadow
        receiveShadow>
        <mesh
          geometry={nodes.player.geometry}
          material={nodes.player.material}
          castShadow
          receiveShadow
          position={[0, 0.05, 0]}
          rotation={[0, 1.57, 0]}
        />
        <group position={[0, 0.07, 0]} rotation={[0, 1.57, 0]}>
          <mesh
            geometry={nodes.Circle003.geometry}
            material={nodes.Circle003.material}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Circle003_1.geometry}
            material={materials.white}
            castShadow
            receiveShadow
          />
        </group>
        <mesh
          geometry={nodes.player_legs.geometry}
          material={nodes.player_legs.material}
          castShadow
          receiveShadow
          position={[0.44, -0.07, -0.29]}
          rotation={[0, 1.57, 0]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.player_knob001.geometry}
          material={nodes.player_knob001.material}
          castShadow
          receiveShadow
          position={[0.4, 0.05, 0.3]}
          rotation={[0, 1.57, 0]}
          scale={[0.74, 0.74, 0.74]}
        />
        <mesh
          geometry={nodes.player_knob.geometry}
          material={nodes.player_knob.material}
          castShadow
          receiveShadow
          position={[0.47, 0.05, 0.3]}
          rotation={[0, 1.57, 0]}
          scale={[0.74, 0.74, 0.74]}
        />
        <mesh
          geometry={nodes.player001.geometry}
          material={nodes.player001.material}
          castShadow
          receiveShadow
          position={[0.41, 0.09, -0.2]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          geometry={nodes.player002.geometry}
          material={nodes.player002.material}
          castShadow
          receiveShadow
          position={[0.41, 0.03, -0.13]}
          rotation={[0, 1.57, 0]}
          scale={[0.19, 0.06, 0.06]}
        />
      </mesh>
    </animated.group>
  )
}

export default Turntable
