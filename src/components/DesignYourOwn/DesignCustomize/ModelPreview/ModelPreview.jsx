import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from '../Control/Controls';
import Model from './Model/Model';
import { Html } from '@react-three/drei';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import model3dAction from '../../../../actions/model-3d.action';

const Loader = () => {
    return (
        <Html center>
            <Spin indicator={<LoadingOutlined style={{ fontSize: 100, color: '#BDAA66' }} spin />} />
        </Html>
    );
};

const ModelPreview = () => {
    const model = useSelector((state) => state.model3d.model);
    const dispatch = useDispatch();

    const setListPartName = (listPartName) => {
        dispatch(model3dAction.setListPartName(listPartName));
    };

    return (
        <Canvas style={{ height: '100%', width: '100%' }} colorManagement shadowMap>
            <ambientLight intensity={0.5} />
            <directionalLight
                intensity={0.3}
                position={[150, 300, 200]}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                castShadow
            />
            <directionalLight
                intensity={0.3}
                position={[150, 300, -200]}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
                castShadow
            />
            <pointLight position={[10, 10, 10]} />
            <Controls />
            <Suspense fallback={<Loader />}>
                <Model model={model} setListPartName={setListPartName} />
            </Suspense>
        </Canvas>
    );
};

export default ModelPreview;
