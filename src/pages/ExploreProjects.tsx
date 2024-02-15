import { ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Experience from '../components/Experience'

const ExploreProjects = () => {
  return (
    <div className='w-screen h-screen'>
      <Canvas>
        <color attach="background" args={['#ececec']} />
        <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default ExploreProjects