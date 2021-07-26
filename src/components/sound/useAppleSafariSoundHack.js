import { useCallback, useEffect } from "react"

const useAppleSafariSoundHack = audioNodeRef => {
  const unlockAudio = useCallback(() => {
    if (!audioNodeRef.current) { return }
    
    audioNodeRef.current.play()
    audioNodeRef.current.pause()
    audioNodeRef.current.currentTime = 0

    document.body.removeEventListener("click", unlockAudio)
    document.body.removeEventListener("touchstart", unlockAudio)
  }, [audioNodeRef])

  useEffect(() => {
    if (!audioNodeRef.current) { return }

    const ua = navigator.userAgent.toLowerCase()

    if (ua.indexOf('safari') !== -1 && !ua.indexOf('chrome') > -1) {
      document.body.addEventListener("click", unlockAudio)
      document.body.addEventListener("touchstart", unlockAudio)
    }
  }, [audioNodeRef, unlockAudio])
}

export default useAppleSafariSoundHack