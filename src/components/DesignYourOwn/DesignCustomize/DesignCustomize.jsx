import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { listBag } from '../mock-data';
import './DesignCustomize.scss';
import { Button, Select, Tooltip } from 'antd';

import zoomIcon from '../../../assets/img/icon/Zoom.svg';
import switchIcon from '../../../assets/img/icon/Switch.svg';
import selectIcon from '../../../assets/img/icon/select.svg';
import ModelPreview from './ModelPreview/ModelPreview';
import { useDispatch, useSelector } from 'react-redux';
import model3dAction from '../../../actions/model-3d.action';

import checkIcon from '../../../assets/img/icon/check.svg';
import uncheckIcon from '../../../assets/img/icon/uncheck.png';

const TextureList = ({ textures, partName }) => {
    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        setSelectedId(null);
    }, [textures]);

    const selectTexture = (index, img) => {
        setSelectedId(index);
        dispatch(model3dAction.pickTexture(partName, img));
    };

    return (
        <div className="row texture-list">
            {_.map(textures, (texture, index) => (
                <div
                    key={index}
                    className={`col-4 col-lg-3 texture-item-wrapper cursor-pointer ${index === selectedId && 'active'}`}
                    onClick={() => selectTexture(index, texture.img)}
                >
                    <div
                        className="texture-item d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: `url(${texture.img})` }}
                    >
                        <div className="size-12 text-white">{texture.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ColorList = ({ colors }) => {
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        setSelectedId(null);
    }, [colors]);

    return (
        <div className="color-list-container color-list row">
            {_.map(colors, (item, index) => (
                <div
                    key={index}
                    className="col-2 color-item-wrapper d-flex flex-column cursor-pointer"
                    onClick={() => setSelectedId(index)}
                >
                    <div
                        className={`color-item d-flex justify-content-center align-items-center ${
                            index === selectedId && 'active'
                        }`}
                    >
                        <div className="color" style={{ backgroundColor: `${item.color}` }} />
                    </div>
                    <div className="name">{item.name}</div>
                </div>
            ))}
        </div>
    );
};

const DesignCustomize = (props) => {
    const bagId = _.get(props, 'match.params.bagName');
    const bag = listBag.find((bag) => bag.id === bagId);
    const model = useSelector((state) => state.model3d.model);
    const [settings, setSettings] = useState(null);
    const [partName, setPartName] = useState(null);

    const handleSelectChange = (e) => {
        setSettings(_.get(bag, ['settings', e]));
        setPartName(e);
    };

    useEffect(() => {
        handleSelectChange(_.first(_.keys(bag.settings)));
    }, []);

    return (
        <div className="page-container design-custom">
            <div className="container-fluid pb-120px">
                <div className="mt-50px mb-50px">
                    <div className="text-uppercase size-14 color-nero d-flex">
                        <span className="mr-2">HOME</span>-<span className="mr-2 ml-2">BAGS</span>-
                        <span className="mr-2 ml-2">ANCOTEMEE DELA</span>-
                        <span className="color-dim-gray ml-2">CONVERTIBLE MINI MERINAL</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="size-31 font-title font-weight-bold">{bag.title}</h3>
                        <div className="mt-30px mb-30px d-flex position-relative justify-content-center align-items-center model-preview">
                            <div className="btn-utils-wrapper position-absolute">
                                <Button className="btn-utils" icon={<img src={zoomIcon} alt="" />} />
                                <Button className="btn-utils ml-3" icon={<img src={switchIcon} alt="" />} />
                            </div>
                            <ModelPreview />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="ml-md-5">
                            <Select
                                onChange={handleSelectChange}
                                defaultValue={_.first(_.keys(bag.settings))}
                                className="select-part"
                                suffixIcon={<img src={selectIcon} alt="" />}
                            >
                                {_.map(_.keys(bag.settings), (option, index) => (
                                    <Select.Option key={index} value={option} className="text-uppercase">
                                        {option}
                                    </Select.Option>
                                ))}
                            </Select>
                            <div>
                                {_.map(settings, (item, index) => (
                                    <div key={index} className="mt-40px">
                                        <h3 className="size-25 font-title font-weight-bold">{item.title}</h3>
                                        <p className="size-16 color-dim-gray">{item.des}</p>
                                        <div>
                                            {!item.isColor ? (
                                                <TextureList textures={item.texture} partName={partName} />
                                            ) : (
                                                <ColorList colors={item.texture} partName={partName} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-80px position-fixed w-100 design-custom-status">
                <div className="container-fluid d-flex justify-content-between align-items-center h-100">
                    <div className="d-flex h-100 texture-status">
                        {_.map(_.keys(bag.settings), (key, index) => (
                            <div
                                key={index}
                                className="h-100 d-flex flex-column justify-content-between align-items-center texture-status-item"
                            >
                                <Tooltip title={key}>
                                    <div className="text-uppercase size-14 color-dim-gray text-truncate w-100">{key}</div>
                                </Tooltip>
                                <img src={!model[key] ? uncheckIcon : checkIcon} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="h-100 result">
                        <div className="h-100">
                            <img src={bag.img} alt='' className="h-100" />
                            <span className="size-18 color-nero ml-20px">{bag.cost}</span>
                            <Button type="primary" size="large" className="btn-open-more ml-100px">
                                <div className="size-14 text-white text-uppercase text">DONE & ADD TO CART</div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignCustomize;
