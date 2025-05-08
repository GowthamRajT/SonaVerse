import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

const Scene = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={6} 
        saturation={0} 
        fade 
        position={[0, 0, 0]} 
        speed={2}
      />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

export default Scene 