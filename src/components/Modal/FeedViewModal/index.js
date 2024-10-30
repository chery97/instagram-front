import { Modal } from '../index';
import FeedView from '../../feedview';
import React from 'react';

const FeedViewModal = ({ postId, onClose }) => {
    return (
        <>
            <Modal isOpen={true} onClose={onClose}>
                <Modal.Body bodyStyle={{ backgroundColor: 'unset' }}>
                    <div
                        style={{
                            width: '90vw',
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <FeedView postId={postId} />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FeedViewModal;
