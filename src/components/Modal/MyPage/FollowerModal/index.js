import styled from 'styled-components';
import profileImage from '../../../../asset/images/profile.png';
import Modal from '../../index';

const FollowerModal = ({ isOpen, onClose }) => {
    const followerData = [
        {
            profileImage: profileImage,
            name: 'chxx3.5',
            follow: false,
            delete: '리스트 삭제 로직',
        },
        {
            profileImage: profileImage,
            name: 'tune_tape',
            follow: true,
            delete: '리스트 삭제 로직',
        },
        {
            profileImage: profileImage,
            name: 'reindeer_green_',
            follow: true,
            delete: '리스트 삭제 로직',
        },
    ];

    const Inner = styled.div``;

    const FollowerList = styled.ul`
        display: flex;
        flex-direction: column;
    `;

    const FollowerListItem = styled.li`
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 14px;
    `;

    const ImageBox = styled.div`
        width: 44px;
        height: 44px;
    `;

    const InfoBox = styled.div`
        flex: 1;
        text-align: left;
    `;

    const Name = styled.span`
        font-size: 14px;
        font-weight: 700;
    `;

    const Follow = styled.span``;

    const DeleteButton = styled.button``;

    return (
        <Modal isOpen={true} onClose={onClose}>
            <Modal.Header title={'팔로우'} onClose={onClose} />
            <Modal.Body>
                <Inner>
                    <input type='text' placeholder='검색' />
                    <FollowerList>
                        {followerData.map((list) => (
                            <>
                                <FollowerListItem>
                                    <ImageBox>
                                        <img src={list.profileImage} alt='' />
                                    </ImageBox>
                                    <InfoBox>
                                        <Name>{list.name}</Name>
                                        {list.follow ? (
                                            <></>
                                        ) : (
                                            <Follow>∙ 팔로우</Follow>
                                        )}
                                    </InfoBox>
                                    <DeleteButton>삭제</DeleteButton>
                                </FollowerListItem>
                            </>
                        ))}
                    </FollowerList>
                </Inner>
            </Modal.Body>
        </Modal>
    );
};

export default FollowerModal;
