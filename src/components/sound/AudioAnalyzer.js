/** based on https://codesandbox.io/s/audio-analyser-forked-nck96?file=/src/App.js **/
import { useEffect, useState } from "react"
import { addEffect } from '@react-three/fiber'

import useStore from "./../../store"

async function createAudio(url, threshold = 10) {
  const res = await fetch(url)
  const buffer = await res.arrayBuffer()
  const context = new (window.AudioContext || window.webkitAudioContext)()
  const analyser = context.createAnalyser()
  analyser.fftSize = 2048
  const data = new Uint8Array(analyser.frequencyBinCount)
  const source = context.createBufferSource()
  source.buffer = await new Promise((res) => context.decodeAudioData(buffer, res))
  source.loop = false
  const gainNode = context.createGain()
  gainNode.gain.value = 0
  gainNode.connect(context.destination)
  source.connect(analyser)
  analyser.connect(gainNode)

  let state = {
    source,
    data,
    signal: false,
    avg: 0,
    update: () => {
      let value = 0
      analyser.getByteFrequencyData(data)
      for (let i = 0; i < data.length; i++) value += data[i]
      const avg = (state.avg = value / data.length)
      if (threshold && avg > threshold) {
        state.signal = true
      } else state.signal = false
    }
  }

  return state
}

const AudioAnalyzer = ({ src, shallAnalyze, shallPrepareAnalyze }) => {
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    const createAudioFromSrc = async () => {
      const createdAudio = await createAudio(src)
      setAudio(createdAudio)
    }

    if (!audio && shallPrepareAnalyze) {
      createAudioFromSrc()
    }
  }, [audio, src, shallPrepareAnalyze])

  useEffect(() => {
    if (shallAnalyze) {
      audio.source.start(0)

      addEffect(() => {
        audio.update()
        useStore.setState({ audioAnalyseState: audio })
      })
    }
  }, [audio, shallAnalyze])

  return null
}

export default AudioAnalyzer