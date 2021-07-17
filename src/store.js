import create from "zustand"

import { SONG, VIEWS } from "./config"

const store = create(set => ({
  view: VIEWS.INTRO,
  appState: null,
  arEngineReady: false,
  sceneEntered: false,
  mute: false,
  currentSongName: SONG.name,
  currentSongDuration: null
}))

export default store