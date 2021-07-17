import React, { forwardRef, useRef } from "react"
import { animated } from "@react-spring/three"
import { FontLoader } from "three"
import { useTexture } from "@react-three/drei"

import matcapAssetWhite from "./../../assets/images/matcap/white.png"
import fontAsset from "./../../assets/fonts/archivo-black.json"

const font = new FontLoader().parse(fontAsset)
const textConfig = {
  font,
  size: 40, height: 3,
  curveSegments: 32,
  bevelEnabled: true, bevelThickness: 6, bevelSize: 2.5, bevelOffset: 0, bevelSegments: 8
}

const Text = forwardRef(({
  text,
  size = 0.8,
  opacity,
  ...props
}, forwardedRef) => {
  const mesh = useRef()
  const matcapWhite = useTexture(matcapAssetWhite)

  return (
    <group
      ref={forwardedRef}
      {...props} scale={[0.01 * size, 0.01 * size, 0.01]}>
      <mesh ref={mesh}>
        <textGeometry args={[text, textConfig]} />
        <animated.meshMatcapMaterial
          opacity={opacity}
          transparent={true}
          matcap={matcapWhite} />
      </mesh>
    </group>
  )
})

export default Text