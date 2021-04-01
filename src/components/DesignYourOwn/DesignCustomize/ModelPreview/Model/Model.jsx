import React, { useEffect } from 'react';
import { useFBX } from '@react-three/drei';
import path from '../../../../../assets/FBX/sandy_lowpoly_uv2.FBX';
import * as THREE from 'three';

const Model = ({ model, setListPartName }) => {
    const fbx = useFBX(path);

    fbx.children.forEach((mesh) => {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.clipShadows = true;
    });

    if (model) {
        fbx.children.forEach((mesh) => {
            if (model[mesh.name]) {
                const textureLoader = new THREE.TextureLoader();
                textureLoader.load(model[mesh.name], (texture) => {
                    texture.encoding = THREE.sRGBEncoding;
                    mesh.material = new THREE.MeshPhysicalMaterial({
                        map: texture,
                    });
                });
            }
        });
    }

    useEffect(() => {
        fbx.position.y = -12;
        setListPartName(fbx.children.map((mesh) => mesh.name));
    }, []);

    return <primitive object={fbx} dispose={null} />;
};

export default Model;
