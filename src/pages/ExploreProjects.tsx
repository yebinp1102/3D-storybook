import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'
import { EffectComposer, Noise } from '@react-three/postprocessing'

const ExploreProjects = () => {
  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <ScrollControls pages={100} damping={1}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.1} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default ExploreProjects