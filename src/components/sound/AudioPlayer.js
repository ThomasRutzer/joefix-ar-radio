import { useEffect, useRef, useState } from "react"
import useAppleSafariSoundHack from "./useAppleSafariSoundHack"

const AudioPlayer = ({ 
  src, srcType = "mp3", shallPlay,
  onPlay = () => {}, onLoadedMetaData = () => {}, onEnded = () => {},
  ...props
}) => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  useAppleSafariSoundHack(audioRef, src)

  useEffect(() => {
    async function tryPlay() {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
        onPlay()
      } catch (e) {
        console.log(e)
      }
    }

    if (shallPlay && !isPlaying) {
      tryPlay()
    } else if(!shallPlay && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [shallPlay, onPlay, isPlaying])

  return (
    <audio
      ref={audioRef}
      onEnded={onEnded}
      onLoadedMetadata={onLoadedMetaData}
      preload="auto"
      {...props}
      style={{ display: "none" }}>
      <source
        src={src}
        type={`audio/${srcType}`} />
    </audio>
  )
}

export default AudioPlayer