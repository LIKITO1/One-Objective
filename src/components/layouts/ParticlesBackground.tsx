import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import {memo} from "react"
type BackProps={
  back:string,
  color:string
}
function ParticlesBackground({back,color}:BackProps) {

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
          color: back
        },
        particles: {
          number: {
            value: 100
          },
          color: {
            value: color
          },
          links: {
            enable: true,
            color: color,
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
export default memo(ParticlesBackground)