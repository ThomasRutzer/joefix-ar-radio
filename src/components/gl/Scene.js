import React, { Suspense, useRef } from "react"
import { animated, useSpring } from "@react-spring/three"
import { OrbitControls } from "@react-three/drei"
import { useControls } from "leva"

import { APP_STATES, TRACKED_IMAGE_SIZE } from "./../../config"
import useStore from "../../store"
import Vinyl from "./Vinyl"
import Turntable from "./Turntable"
import Arm from "./Arm"
import InfoText from "./InfoText"
import Explosion from "./Explosion"

function Scene() {
  const tweaks = useControls({
    ambientLightIntensitity: 1,
    pointLightIntensitiy: 3,
    pointLightPos: {
      value: { x: 0, y: 10, z: 0 },
      step: 1,
    },
    spotLightIntensity: 1,
    spotLightPos: {
      value: { x: 0, y: 1, z: 0 },
      step: 1,
    },
  })

  const orbitControlsRef = useRef()

  const enterTransitionTurntable = useSpring({
    to: { position: [0, 0, 0], rotation: [0, 0, 0] },
    from: { position: [0, 0, -2], rotation: [0, Math.PI * 3, 0] },
    config: { mass: 0.4, tension: 60, friction: 14 }
  })

  const enterTransitionVinyl = useSpring({
    to: async next => {
      await next({ position: [0, 1.8, 0], rotation: [Math.PI * 2, 0, 0] })
      await next({
        position: [0, 0, 0],
        rotation: [Math.PI * 4, 0, 0],
      })
    },
    from: { position: [0, -0.5, 0], rotation: [0, 0, 0] },
    config: { mass: 0.4, tension: 60, friction: 14 }
  })

  const enterTransitionArm = useSpring({
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, -0.09, 0] },
    delay: 3000,
    config: {
      duration: 1000
    },
    onRest: () => useStore.setState({ appState: APP_STATES.SHALL_PLAY })
  })

  const enterTransitionInfoText = useSpring({
    to: { rotation: [-Math.PI / 2, 0, 0], opacity: 1 },
    from: { rotation: [-Math.PI, 0, 0], opacity: 0 },
    config: { mass: 0.5, tension: 120, friction: 12 },
    delay: 4700
  })

  return (
    <>
      <Suspense fallback={null}>

        <group
          scale={[
            TRACKED_IMAGE_SIZE.width * 1.2, 
            TRACKED_IMAGE_SIZE.height * 1.2, 
            TRACKED_IMAGE_SIZE.depth * 1.2
          ]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <Explosion />
          <InfoText {...enterTransitionInfoText} />
          <Vinyl {...enterTransitionVinyl} />
          <animated.group {...enterTransitionTurntable}>
            <Arm {...enterTransitionArm} />
            <Turntable />
          </animated.group>
          <ambientLight intensity={tweaks.ambientLightIntensitity} />
          <spotLight
            penumbra={1}
            position={[tweaks.spotLightPos.x, tweaks.spotLightPos.y, tweaks.spotLightPos.z]}
            intensity={tweaks.spotLightIntensity}
            castShadow={false}
            shadow-bias={0}
          />
          <pointLight
            position={[tweaks.pointLightPos.x, tweaks.pointLightPos.y, tweaks.pointLightPos.z]}
            intensity={tweaks.pointLightIntensitiy}
          />
        </group>
      </Suspense>
      <OrbitControls ref={orbitControlsRef} />
    </>
  )
}

export default Scene
