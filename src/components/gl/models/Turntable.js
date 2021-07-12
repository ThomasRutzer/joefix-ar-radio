import { useGLTF, useTexture } from "@react-three/drei"

import matcapAssetBlack from "./../../../assets/images/matcap/black.png"
import matcapAssetWhite from "./../../../assets/images/matcap/white.png"
import turntableGLTF from "./../../../assets/gltf/turntable.gltf"

const Turntable = props => {
  const matcapBlack = useTexture(matcapAssetBlack)
  const matcapWhite = useTexture(matcapAssetWhite)
  const { nodes } = useGLTF(turntableGLTF)

  return (
    <group {...props}>
      <mesh
        geometry={nodes.music_player.geometry}
        material={nodes.player_legs.material}
        castShadow
        receiveShadow>
        <meshMatcapMaterial matcap={matcapBlack} />
        <mesh
          geometry={nodes.player.geometry}
          castShadow
          receiveShadow
          position={[0, 0.05, 0]}
          rotation={[0, 1.57, 0]}>
          <meshMatcapMaterial matcap={matcapWhite} />
        </mesh>
        <group position={[0, 0.07, 0]} rotation={[0, 1.57, 0]}>
          <mesh
            geometry={nodes.Circle003.geometry}
            castShadow
            receiveShadow>
            <meshMatcapMaterial matcap={matcapWhite} />
          </mesh>
          <mesh
            geometry={nodes.Circle003_1.geometry}
            castShadow
            receiveShadow>
            <meshMatcapMaterial matcap={matcapBlack} />
          </mesh>
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
          castShadow
          receiveShadow
          position={[0.4, 0.05, 0.3]}
          rotation={[0, 1.57, 0]}
          scale={[0.74, 0.74, 0.74]}>
          <meshMatcapMaterial matcap={matcapWhite} />
        </mesh>
        <mesh
          geometry={nodes.player_knob.geometry}
          castShadow
          receiveShadow
          position={[0.47, 0.05, 0.3]}
          rotation={[0, 1.57, 0]}
          scale={[0.74, 0.74, 0.74]}>
          <meshMatcapMaterial matcap={matcapWhite} />
        </mesh>
        <mesh
          geometry={nodes.player001.geometry}
          castShadow
          receiveShadow
          position={[0.41, 0.09, -0.2]}
          rotation={[0, 1.57, 0]}>
          <meshMatcapMaterial matcap={matcapWhite} />
        </mesh>
        <mesh
          geometry={nodes.player002.geometry}
          castShadow
          receiveShadow
          position={[0.41, 0.03, -0.13]}
          rotation={[0, 1.57, 0]}
          scale={[0.19, 0.06, 0.06]}>
          <meshMatcapMaterial matcap={matcapWhite} />
        </mesh>
      </mesh>
    </group>
  )
}

export default Turntable
