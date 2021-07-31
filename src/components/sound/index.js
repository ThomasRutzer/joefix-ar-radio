import { useEffect, useState } from "react"

import songAsset from "./../../assets/sounds/song.mp3"
import atmoSoundAsset from "./../../assets/sounds/atmo.mp3"
import analyzedSoundAsset from "./../../assets/sounds/analyzed.mp3"
import useStore from "../../store"
import { APP_STATES, DELAY_UNTIL_SONG_STARTS, DELAY_UNTIL_ANALYTE_STARTS } from "../../config"
import useTimeout from "../../hooks/useTimout"
import AudioPlayer from "./AudioPlayer"
import AudioAnalyzer from "./AudioAnalyzer"

const Sound = () => {
  const appState = useStore(state => state.appState)
  const mute = useStore(state => state.mute)
  const [songShallPlay, setSongShallPlay] = useState(null)
  const [scheduleSongToPlay, setSchedulerForSongPlay] = useState(null)
  const [analyzeShallStart, setAnalyzeShallStart] = useState(null)
  const [atmoShallPlay, setAtmoShallPlay] = useState(null)

  useTimeout(() => setSongShallPlay(true), scheduleSongToPlay ? DELAY_UNTIL_SONG_STARTS : null)
  useTimeout(() => setAnalyzeShallStart(true), scheduleSongToPlay ? DELAY_UNTIL_ANALYTE_STARTS : null)

  useEffect(() => {
    switch (appState) {
      case APP_STATES.SHALL_PLAY:
        setAtmoShallPlay(true)
        setSchedulerForSongPlay(true)
        return
      case APP_STATES.PLAY_FINISHED:
        setAtmoShallPlay(false)
        setSongShallPlay(false)
        setSchedulerForSongPlay(false)
        setAnalyzeShallStart(false)
        return
      default:
        return null
    }
  }, [appState])

  return (
    <>
      <AudioAnalyzer 
        shallAnalyze={analyzeShallStart} 
        src={analyzedSoundAsset} />
      <AudioPlayer
        onLoadedMetaData={
          e => useStore.setState({ currentSongDuration: Math.round(e.target.duration * 1000) })
        }
        onEnded={() => useStore.setState({ appState: APP_STATES.PLAY_FINISHED })}
        shallPlay={songShallPlay}
        src={songAsset}
        loop={false}
        muted={mute}
      />
      <AudioPlayer
        onPlay={() => useStore.setState({ appState: APP_STATES.PLAY })}
        src={atmoSoundAsset}
        shallPlay={atmoShallPlay}
        loop={true}
        muted={mute}
      />
    </>
  )
}

export default Sound