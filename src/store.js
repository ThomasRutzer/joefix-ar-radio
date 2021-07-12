import create from "zustand"

import { SONGS, VIEWS } from "./config"

const store = create(set => ({
  view: VIEWS.INTRO,
  appState: null,
  sceneEntered: true,
  currentSongName: SONGS[0].name,
  currentSongDuration: null,
}))

export default store