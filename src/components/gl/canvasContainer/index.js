import React, { useCallback } from "react"
import {
  ARCanvas,
  NFTMarker
} from "react-three-arnft"
// import { Canvas as ARCanvas } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

import turntableGlTF from "./../../../assets/gltf/turntable.gltf"
import vinylGLTF from "./../../../assets/gltf/Vinyl_disc.glb"
import { TRACKED_IMAGE_SIZE, VIEWS } from "./../../../config"
import useStore from "./../../../store"
import Scene from "./../Scene"
import FocusHint from "./../../ui/FocusHint"
import ARSessionMenu from "../../ui/aSessionMenu"

const CanvasContainer = () => {
  const view = useStore(store => store.view)
  const sceneEntered = useStore(store => store.sceneEntered)

  const onWorkerMessage = useCallback(({ type }) => {
    if (type === "markerAdded") {
      useStore.setState({ arEngineReady: true })
    }

    if (type === "found" && !sceneEntered) {
      useStore.setState({ sceneEntered: true })
    }
  }, [sceneEntered])

  return (
    <>
      {view === VIEWS.SCENE &&
        <>
          <ARSessionMenu />
          <FocusHint />
          <div className="canvas-container">
            <ARCanvas
              interpolationFactor={24}
              dpr={window.devicePixelRatio}
              camera={{ far: 2000 }}
              onCreated={({ gl }) => {
                gl.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                gl.setSize(window.innerWidth, window.innerHeight)
              }}
              onWorkerMessage={onWorkerMessage}
              cameraParamUrl={`${process.env.PUBLIC_URL}/data/camera_para.dat`}
              workerScriptUrl={`${process.env.PUBLIC_URL}/js/arnft.worker.js`}

            >
              <NFTMarker

                url={"data/marker/cover"}>
                <group
                  position={[
                    TRACKED_IMAGE_SIZE.width * 0.5,
                    TRACKED_IMAGE_SIZE.height * 0.5,
                    0
                  ]}>
                  {sceneEntered &&
                    <Scene />
                  }
                </group>
              </NFTMarker>
              {/* {sceneEntered &&
                <Scene />
              } */}
            </ARCanvas>
          </div>
        </>
      }
    </>
  )
}

useGLTF.preload(turntableGlTF)
useGLTF.preload(vinylGLTF)

export default CanvasContainer
