'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { Suspense, useMemo, useRef } from 'react'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Vector3, type Group, type Mesh } from 'three'

function ParallaxCamera() {
const { camera, pointer } = useThree()
useFrame(() => {
  // Smooth camera parallax tied to pointer
  const target = new Vector3(3.2 + pointer.x * 0.3, 2.4 + pointer.y * 0.2, 3.2)
  camera.position.lerp(target, 0.05)
  camera.lookAt(0, 0, 0)
})
return null
}

function AutoRotateGroup({ children }: { children: React.ReactNode }) {
const ref = useRef<Group>(null)
useFrame((_s, delta) => {
  if (!ref.current) return
  ref.current.rotation.y += delta * 0.25
})
return <group ref={ref}>{children}</group>
}

function GlossRing({
position = [0, 0, 0],
rotation = [0, 0, 0],
color = '#2D8CFF',
}: {
position?: [number, number, number]
rotation?: [number, number, number]
color?: string
}) {
return (
  <Float speed={1.2} floatIntensity={1.0} rotationIntensity={0.5}>
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      <torusGeometry args={[1.05, 0.28, 128, 64]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.12}
        metalness={0.35}
        clearcoat={1}
        clearcoatRoughness={0.04}
        reflectivity={1}
        sheen={1}
        sheenRoughness={0.2}
      />
    </mesh>
  </Float>
)
}

function GlossCapsule({
position = [0, 0, 0],
rotation = [0, 0, 0],
color = '#7FB6FF',
radius = 0.38,
length = 2.6,
}: {
position?: [number, number, number]
rotation?: [number, number, number]
color?: string
radius?: number
length?: number
}) {
return (
  <Float speed={1.0} floatIntensity={0.85} rotationIntensity={0.45}>
    <mesh position={position} rotation={rotation} castShadow receiveShadow>
      {/* CapsuleGeometry: radius, length, capSegments, radialSegments */}
      {/* three >= r152 supports CapsuleGeometry */}
      {/* @ts-ignore - type defs may lag behind */}
      <capsuleGeometry args={[radius, length, 16, 32]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.18}
        metalness={0.25}
        clearcoat={1}
        clearcoatRoughness={0.06}
        envMapIntensity={1.2}
      />
    </mesh>
  </Float>
)
}

export function Hero3D() {
return (
  <div className="relative h-[320px] w-full rounded-xl overflow-hidden md:h-[380px] lg:h-[420px]">
    <Canvas camera={{ position: [3.2, 2.4, 3.2], fov: 48 }} dpr={[1, 2]} shadows>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 2]} intensity={1.35} castShadow />
      <color attach="background" args={['#ffffff']} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <AutoRotateGroup>
          {/* Interlocked glossy rings */}
          <GlossRing color="#2D8CFF" position={[0, 0.1, 0]} rotation={[Math.PI / 2.15, 0, 0]} />
          <GlossRing color="#5AA0FF" position={[0.95, 0.05, 0]} rotation={[0, Math.PI / 2.2, 0]} />
          <GlossRing color="#8EC0FF" position={[-0.95, -0.05, 0]} rotation={[0, -Math.PI / 2.5, Math.PI / 12]} />
          {/* Soft elongated glossy capsules for contrast */}
          <GlossCapsule position={[0.2, -0.6, 0.9]} rotation={[Math.PI / 10, Math.PI / 8, Math.PI / 32]} />
          <GlossCapsule color="#A6D0FF" position={[-0.45, 0.55, -0.6]} rotation={[-Math.PI / 12, -Math.PI / 10, Math.PI / 20]} length={2.2} />
        </AutoRotateGroup>
        <EffectComposer disableNormalPass>
          <Bloom intensity={0.4} luminanceThreshold={0.7} luminanceSmoothing={0.25} mipmapBlur />
        </EffectComposer>
        <ParallaxCamera />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.9} minPolarAngle={Math.PI / 3.3} />
    </Canvas>
    {/* Soft glass sheen */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_10%_10%,rgba(255,255,255,0.12),transparent_60%)]" />
  </div>
)
}
