import { Link } from 'react-router-dom';
import { Modal } from '../index';

const FeedServiceModal = ({ onClose }) => {
    const serviceList = [
        {
            title: '신고',
            path: '',
            fontWeight: '800',
            color: '#ed4956',
        },
        {
            title: '팔로우 취소',
            path: '',
            fontWeight: '800',
            color: '#ed4956',
        },
        {
            title: '즐겨찾기에 추가',
            path: '',
        },
        {
            title: '게시물로 이동',
            path: '',
        },
        {
            title: '공유 대상...',
            path: '',
        },
        {
            title: '링크 복사',
            path: '',
        },
        {
            title: '퍼가기',
            path: '',
        },
        {
            title: '이 계정 정보',
            path: '',
        },
    ];

    return (
        <>
            <Modal isOpen={true} onClose={onClose}>
                <Modal.Body bodyStyle={{ backgroundColor: 'unset' }}>
                    <div
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '400px',
                            height: '432px',
                            background: '#fff',
                            borderRadius: '12px',
                            zIndex: 15,
                        }}
                    >
                        <ul style={{ height: '100%' }}>
                            {serviceList.map((item) => {
                                return (
                                    <li
                                        style={{
                                            height: 'calc(100% / 9)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderBottom: '1px solid #dbdbdb',
                                            fontSize: '14px',
                                            fontWeight:
                                                item.fontWeight ?? '500',
                                            color: item.color ?? '#000',
                                        }}
                                    >
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                );
                            })}
                            <li
                                style={{
                                    height: 'calc(100% / 9)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#000',
                                }}
                            >
                                <button onClick={onClose}>취소</button>
                            </li>
                        </ul>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FeedServiceModal;
