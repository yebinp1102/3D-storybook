import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'

const ExploreProjects = () => {
  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <ScrollControls pages={100} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default ExploreProjects