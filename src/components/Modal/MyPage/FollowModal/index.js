import styled from 'styled-components';
import profileImage from '../../../../asset/images/profile.png';
import { Modal } from '../../index';

const FollowModal = ({ onClose }) => {
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

    const Container = styled.div`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 12;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 366px;
        background: #fff;
        border-radius: 15px;
        overflow: hidden;
        & > div:nth-child(2) {
            flex: 1;
        }
    `;

    const Inner = styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
    `;

    const Input = styled.input`
        padding: 8px 15px;
        margin: 8px 0;
        background: #efefef;
        border-radius: 7px;
    `;

    const FollowerList = styled.ul`
        display: flex;
        flex-direction: column;
        gap: 15px;
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
        display: flex;
        align-items: center;
        text-align: left;
    `;

    const Name = styled.span`
        font-size: 14px;
        font-weight: 700;
    `;

    const Follow = styled.span`
        font-size: 12px;
        font-weight: bold;
        color: #0095f5;
    `;

    const DeleteButton = styled.button`
        padding: 7px 15px;
        background: #efefef;
        border-radius: 7px;
        font-weight: bold;
    `;

    return (
        <Modal isOpen={true} onClose={onClose}>
            <Container>
                <Modal.Header title={'팔로우'} onClose={onClose} />
                <Modal.Body>
                    <Inner>
                        <Input type='text' placeholder='검색' />
                        <FollowerList>
                            {followerData.map((list) => (
                                <>
                                    <FollowerListItem>
                                        <ImageBox>
                                            <img
                                                src={list.profileImage}
                                                alt=''
                                            />
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
                <Modal.Footer></Modal.Footer>
            </Container>
        </Modal>
    );
};

export default FollowModal;
