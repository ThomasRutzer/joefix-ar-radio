/** based on https://codesandbox.io/s/audio-analyser-forked-nck96?file=/src/App.js **/
import { useFrame } from "@react-three/fiber"
import { useRef, useMemo } from "react"
import { useAnimations, useGLTF } from "@react-three/drei"
import { LoopOnce } from "three"

import explosionGLTF from "./../../assets/gltf/explosion.glb"
import useStore from "./../../store"

const Explosion = props => {
  const sceneRef = useRef()
  const instance = useRef()
  // The GLTF only contains a point-cloud and baked keyframes for the explosion
  const { scene: originalScene, animations } = useGLTF(explosionGLTF)
  const scene = useMemo(() => originalScene.clone(true), [originalScene])
  const { actions, mixer } = useAnimations(animations, sceneRef)
  const signal = useStore(state => state.audioAnalyseState.signal)

  mixer.timeScale = 2

  const play = () =>
    Object.keys(actions).forEach((key) => {
      actions[key].setLoop(LoopOnce).stop().reset()
      actions[key].play()
    })

  useFrame(() => {
    if (signal) {
      play()
    } 

    sceneRef.current.children.forEach((node, i) => instance.current.setMatrixAt(i, node.matrix))
    instance.current.instanceMatrix.needsUpdate = true
  })
  
  return (
    <group {...props}>
      <group scale={[0.05, 0.05, 0.05]}>
        <primitive ref={sceneRef} object={scene} />
        <instancedMesh ref={instance} args={[null, null, originalScene.children.length]}>
          <circleGeometry args={[0.5, 0]} />
          <meshBasicMaterial toneMapped={false} color={"#d5d3d3"} />
        </instancedMesh>
      </group>
    </group>
  )
}

export default Explosion