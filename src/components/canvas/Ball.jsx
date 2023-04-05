import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, OrbitControls, Float, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const BallModel = (props) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={100} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} flatShading />
            </mesh>
        </Float>
    );
};

const Ball = ({ icon }) => {
    return (
        <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={null}>
                <OrbitControls enablePan={false} enableZoom={false} makeDefault autoRotate autoRotateSpeed={0.75} />
                <BallModel imgUrl={icon} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default Ball;
