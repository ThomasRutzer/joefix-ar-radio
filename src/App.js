import React, { lazy, Suspense } from "react"
import { Leva } from "leva"

import useStore from "./store"
import { VIEWS } from "./config"
import Sound from "./components/sound"
import Info from "./components/ui/info"
import LoadingIndicator from "./components/ui/loadingIndicator"
const CanvasContainer = lazy(() => import("./components/gl/CanvasContainer"))

const App = () => {

  return (
    <>
      <LoadingIndicator />
      <Info onStartButton={() => useStore.setState({ view: VIEWS.SCENE })} />

      <>
        <Suspense fallback={<LoadingIndicator />}>
          <CanvasContainer />
        </Suspense>
      </>

      <Sound />
      <Leva
        collapsed
        hidden={process.env.NODE_ENV === "production"}
      />
    </>
  )
}

export default App
