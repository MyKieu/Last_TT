import React, { useEffect } from 'react';
import { Modal } from 'antd';
import './ReviewImg.scss';
import { useDispatch, useSelector } from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';
import reviewImgDialogAction from '../../../../actions/review-img-dialog.action';

const ReviewImg = () => {
    const isOpen = useSelector((state) => state?.dialog?.reviewImg?.isOpen);
    const img = useSelector((state) => state?.dialog?.reviewImg?.img);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isOpen) {
            showModal();
        } else {
            handleCancel();
        }
    }, [isOpen]);

    const showModal = () => {
        dispatch(reviewImgDialogAction.openDialog());
    };

    const handleCancel = () => {
        dispatch(reviewImgDialogAction.closeDialog());
    };

    return (
        <Modal
            visible={isOpen}
            onCancel={handleCancel}
            width={800}
            footer={null}
            className="review-img-dialog"
            style={{ top: 0, height: '100vh' }}
        >
            <PerfectScrollbar className="h-100 d-flex align-items-center">
                <img src={img} alt="" className="w-100" />
            </PerfectScrollbar>
        </Modal>
    );
};

export default ReviewImg;
