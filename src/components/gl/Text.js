import React, { useRef } from "react"
import { animated } from "@react-spring/three"
import * as THREE from "three"
import { useTexture } from "@react-three/drei"

import matcapAssetRed from "./../../assets/images/matcap/red.png"
import matcapAssetWhite from "./../../assets/images/matcap/white.png"
import fontAsset from "./../../assets/fonts/archivo-black.json"

const font = new THREE.FontLoader().parse(fontAsset)
const textConfig = { 
  font, 
  size: 40, height: 3, 
  curveSegments: 32, 
  bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8 
}

const Text = ({
  children,
  size = 0.8,
  appearance = "primary",
  opacity,
  ...props
}) => {
  const mesh = useRef()
  const matcapWhite = useTexture(matcapAssetWhite)
  const matcapRed = useTexture(matcapAssetRed)

  return (
    <group {...props} scale={[0.01 * size, 0.01 * size, 0.01]}>
      <mesh ref={mesh}>
        <textGeometry args={[children, textConfig]} />
        <animated.meshMatcapMaterial 
          opacity={opacity}
          transparent={true}
          matcap={appearance === "primary" ? matcapRed : matcapWhite} />
      </mesh>
    </group>
  )
}

export default Text