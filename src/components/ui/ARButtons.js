/**
 * Based on https://raw.githubusercontent.com/pmndrs/react-xr/master/src/webxr/ARButton.js 
 * Should implement proper AR Button soon 
*/

class ARButtons {
  static createButton(renderer, sessionInit = {}, onClick, onExit) {
    const button = document.createElement("button")

    function showStartAR(supported) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", 38)
      svg.setAttribute("height", 38)
      svg.style.position = "absolute"
      svg.style.right = "20px"
      svg.style.top = "20px"
      svg.addEventListener("click", function () {
        currentSession.end()
        onExit()
      })
      sessionInit.domOverlay.root.appendChild(svg)

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
      path.setAttribute("d", "M 12,12 L 28,28 M 28,12 12,28")
      path.setAttribute("stroke", "#fff")
      path.setAttribute("stroke-width", 3)
      svg.appendChild(path)

      //

      let currentSession = null

      async function onSessionStarted(session) {
        session.addEventListener("end", onSessionEnded)

        renderer.xr.setReferenceSpaceType("local")

        await renderer.xr.setSession(session)

        button.textContent = "STOP AR"
        sessionInit.domOverlay.root.style.display = ""

        currentSession = session
      }

      function onSessionEnded(/*event*/) {
        currentSession.removeEventListener("end", onSessionEnded)

        button.textContent = "GOT IT"
        sessionInit.domOverlay.root.style.display = "none"

        currentSession = null
      }

      button.style.display = ""
      button.textContent = "GOT IT"

      button.onclick = function () {
        console.log(sessionInit);
        if (supported) {
          if (currentSession === null) {
            navigator.xr.requestSession("immersive-ar", sessionInit).then(onSessionStarted)
          } else {
            currentSession.end()
          }
        } else {
          button.style.display = "none"
        }

        onClick()
      }
    }

    function stylizeElement(element) {
      element.style.position = "fixed"
      element.style.bottom = "128px"
      element.style.zIndex = "999"
      element.style.left = "50%"
      element.style.width = "calc(100% - 48px)"
      element.style.maxWidth = "640px"
      element.style.transform = "translateX(-50%)"
    }

    if ("xr" in navigator) {
      button.id = "ARButton"
      button.style.display = "none"

      stylizeElement(button)

      navigator.xr
        .isSessionSupported("immersive-ar")
        .then(supported => showStartAR(supported))

      return button
    } else {
      const message = document.createElement("a")

      if (window.isSecureContext === false) {
        message.href = document.location.href.replace(/^http:/, "https:")
        message.innerHTML = "WEBXR NEEDS HTTPS" // TODO Improve message
      } else {
        message.href = "https://immersiveweb.dev/"
        message.innerHTML = "WEBXR NOT AVAILABLE"
      }

      message.style.left = "calc(50% - 90px)"
      message.style.width = "180px"
      message.style.textDecoration = "none"

      stylizeElement(message)

      return message
    }
  }
}

export default ARButtons
