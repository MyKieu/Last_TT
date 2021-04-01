import React, { useRef } from 'react';
import { useThree } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';

const Controls = () => {
    const controls = useRef();
    const { camera } = useThree();
    camera.position.z = 30;

    return <OrbitControls ref={controls} args={[camera]} />;
};

export default Controls;
