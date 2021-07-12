import React, { lazy, Suspense } from "react"

import useStore from "./store"
import { VIEWS } from "./config"
import Sound from "./components/sound"
import Info from "./components/ui/info"
import FocusHint from "./components/ui/FocusHint"
import LoadingIndicator from "./components/ui/loadingIndicator"
const CanvasContainer = lazy(() => import("./components/gl/canvasContainer"))

const App = () => {
  return (
    <>
      <Info onStartButton={() => useStore.setState({ view: VIEWS.SCENE })} />
      <>
        {/* <FocusHint /> */}
        <Suspense fallback={<LoadingIndicator />}>
          <CanvasContainer />
        </Suspense>
      </>

      {/* <Sound /> */}
    </>
  )
}

export default App