import { useEffect } from "react"

const useAppleSafariSoundHack = soundAssets => {
  function unlockAudio() {
    soundAssets.map(soundAsset => {
      const sound = new Audio(soundAsset)

      sound.play()
      sound.pause()
      sound.currentTime = 0

      return null
    })

    document.body.removeEventListener("click", unlockAudio)
    document.body.removeEventListener("touchstart", unlockAudio)
  }

  function isAppleDevice() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') !== -1 && !ua.indexOf('chrome') > -1
  }

  useEffect(() => {
    if (isAppleDevice()) {
      document.body.addEventListener("click", unlockAudio)
      document.body.addEventListener("touchstart", unlockAudio)
    }
  }, [])
}

export default useAppleSafariSoundHack