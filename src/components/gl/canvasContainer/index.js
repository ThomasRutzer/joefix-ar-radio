import React, { Suspense } from "react"
import {
  ARCanvas,
  NFTMarker
} from "react-three-arnft"
// import { Canvas as ARCanvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

import turntableGlTF from "./../../../assets/gltf/turntable.gltf"
import vinylGLTF from "./../../../assets/gltf/vinyl.glb"
import { TRACKED_IMAGE_SIZE, VIEWS } from "./../../../config"
import useStore from "./../../../store"
import Scene from "./../Scene"

const CanvasContainer = () => {
  const view = useStore(store => store.view)

  return (
    <>
      {view === VIEWS.SCENE &&
        <div className="canvas-container">
          <ARCanvas
            interpolationFactor={24}
            dpr={window.devicePixelRatio}
            onCreated={({ gl }) => {
              gl.logarithmicDepthBuffer = true
              gl.setSize(window.innerWidth, window.innerHeight)
            }}
          >
            <NFTMarker url={"data/marker/cover"}>
              <group
                position={[
                  TRACKED_IMAGE_SIZE.width * 0.5,
                  TRACKED_IMAGE_SIZE.height * 0.5,
                  0
                ]}>
                {/* <mesh scale={[TRACKED_IMAGE_SIZE.width, TRACKED_IMAGE_SIZE.height, TRACKED_IMAGE_SIZE.depth]}>
                  <boxBufferGeometry args={[1, 1, 1]} />
                  <meshNormalMaterial opacity={0.5} transparent={true} />
                </mesh> */}
                <Scene />
              </group>
            </NFTMarker>
          </ARCanvas>
        </div>
      }
    </>
  )
}

useGLTF.preload(turntableGlTF)
useGLTF.preload(vinylGLTF)

export default CanvasContainer
