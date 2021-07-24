import { useEffect } from "react"

const useAppleSafariSoundHack = (audioNodeRef, soundAsset) => {
  function unlockAudio() {
    audioNodeRef.current.play()
    audioNodeRef.current.pause()
    audioNodeRef.current.currentTime = 0

    document.body.removeEventListener("click", unlockAudio)
    document.body.removeEventListener("touchstart", unlockAudio)
  }

  function isSafariDevice() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') !== -1 && !ua.indexOf('chrome') > -1
  }

  useEffect(() => {
    if (!audioNodeRef.current) { return }

    if (isSafariDevice()) {
      document.body.addEventListener("click", unlockAudio)
      document.body.addEventListener("touchstart", unlockAudio)
    }
  }, [audioNodeRef])
}

export default useAppleSafariSoundHack