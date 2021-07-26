import create from "zustand"

import { VIEWS } from "./config"

const store = create(set => ({
  view: VIEWS.INTRO,
  appState: null,
  arEngineReady: true,
  sceneEntered: true,
  mute: false,
  currentSongDuration: null,
  audioAnalyseState: { signal: false }
}))

export default store