import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

export default function ParticlesBackground() {

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },
        background: {
          color: "#154"
        },
        particles: {
          number: {
            value: 80
          },
          color: {
            value: "#ffffff"
          },
          links: {
            enable: true,
            color: "#ffffff",
            distance: 100
          },
          move: {
            enable: true,
            speed: 2
          }
        }
      }}
    />
  )
}