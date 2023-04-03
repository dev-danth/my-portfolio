import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Decal,
    OrbitControls,
    Float,
    Preload,
    useTexture,
    Html,
    PerspectiveCamera,
    Line,
    Sphere,
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import { EllipseCurve } from 'three';
import { technologies } from '../../constants';

const SunModel = (props) => {
    const decal = useTexture('./2k_sun.jpg');
    return (
        <mesh>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial map={decal} />
        </mesh>
    );
};

function Ecliptic({ radius = 1 }) {
    const points = useMemo(
        () => new EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0).getPoints(300),
        [radius],
    );

    return <Line worldUnits points={points} color="turquoise" lineWidth={0.01} />;
}
const Planet = ({ techSet }) => {
    const planet = useRef();
    const { radius, speed, techs } = techSet;
    const lenght = techs?.lenght;
    console.log(lenght);
    /* useFrame(() => {
        planet.current.rotation.z += speed;
    }); */
    return (
        <group ref={planet}>
            {techs.map((tech, index, techs) => (
                <mesh
                    key={index}
                    position={[
                        +radius * Math.cos((Math.PI * 2 * index) / Number(techs.lenght)),
                        +radius * Math.sin((Math.PI * 2 * index) / Number(techs.lenght)),
                        0,
                    ]}
                >
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshStandardMaterial color="#ffff00" />
                    <Html distanceFactor={20} className="mt-[-38px] ml-[-20px]"></Html>
                </mesh>
            ))}
            ;
            <Ecliptic radius={radius} />
        </group>
    );
};

const Sun = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <pointLight position={[0, 0, 0]} />
            <PerspectiveCamera makeDefault position={[0, 15, 15]} />
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enablePan={false} enableZoom={false} />
                <SunModel />
                <Planet techSet={technologies[1]} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};
export default Sun;
