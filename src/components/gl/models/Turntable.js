import { useGLTF, useTexture } from "@react-three/drei"
import { useMemo } from "react"
import { MeshMatcapMaterial } from "three"

import matcapAssetBlack from "./../../../assets/images/matcap/black.png"
import turntableGLTF from "./../../../assets/gltf/turntable.gltf"

const Turntable = props => {
  const matcapBlack = useTexture(matcapAssetBlack)
  const meshMatcapMaterialBlack = useMemo(() => new MeshMatcapMaterial({matcap: matcapBlack}), [])
  const { nodes } = useGLTF(turntableGLTF)

  return (
    <group {...props}>
      <mesh
        geometry={nodes.music_player.geometry}
        castShadow
        receiveShadow>
        <meshMatcapMaterial matcap={matcapBlack} />
        <mesh
          geometry={nodes.player.geometry}
          castShadow
          receiveShadow
          position={[0, 0.05, 0]}
          rotation={[0, 1.57, 0]} />
        <group position={[0, 0.1, 0]} rotation={[0, 1.57, 0]}>
          <mesh
            geometry={nodes.Circle003.geometry}
            material={meshMatcapMaterialBlack}
            castShadow
            receiveShadow />
          <mesh
            geometry={nodes.Circle003_1.geometry}
            material={meshMatcapMaterialBlack}
            castShadow
            receiveShadow>
          </mesh>
        </group>
        <mesh
          geometry={nodes.player_legs.geometry}
          material={meshMatcapMaterialBlack}
          castShadow
          receiveShadow
          position={[0.44, -0.07, -0.29]}
          rotation={[0, 1.57, 0]}
          scale={[0.04, 0.04, 0.04]}
        />
        <mesh
          geometry={nodes.player_knob001.geometry}
          material={meshMatcapMaterialBlack}
          castShadow
          receiveShadow
          position={[0.4, 0.05, 0.3]}
          rotation={[0, 1.57, 0]}
          scale={[0.74, 0.74, 0.74]} />
        <mesh
          geometry={nodes.player_knob.geometry}
          material={meshMatcapMaterialBlack}
          castShadow
          receiveShadow
          position={[0.47, 0.05, 0.3]}
          rotation={[0, 1.57, 0]}
          scale={[0.74, 0.74, 0.74]} />
        <mesh
          geometry={nodes.player001.geometry}
          material={meshMatcapMaterialBlack}
          castShadow
          receiveShadow
          position={[0.41, 0.12, -0.2]}
          rotation={[0, 1.57, 0]} />
        <mesh
          geometry={nodes.player002.geometry}
          material={meshMatcapMaterialBlack}
          castShadow
          receiveShadow
          position={[0.41, 0.03, -0.13]}
          rotation={[0, 1.57, 0]}
          scale={[0.19, 0.06, 0.06]} />
      </mesh>
    </group>
  )
}

export default Turntable
