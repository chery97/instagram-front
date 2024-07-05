import styled from 'styled-components';
import profileImage from '../../../../asset/images/profile.png';
import { Modal } from '../../index';
// import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
// import { useEffect, useState } from 'react';

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

const FollowerModal = ({ onClose }) => {
    const followerData = [
        { profileImage: profileImage, name: 'chxx3.5', follow: false },
        { profileImage: profileImage, name: 'tune_tape', follow: true },
        { profileImage: profileImage, name: 'seran_24k', follow: true },
        { profileImage: profileImage, name: 'j_2n_u', follow: true },
        { profileImage: profileImage, name: 'ch_ung4423', follow: true },
        { profileImage: profileImage, name: 'heyjoo_12', follow: true },
        { profileImage: profileImage, name: 'ha_dor_able', follow: true },
        { profileImage: profileImage, name: 'kiuy_56v', follow: true },
        { profileImage: profileImage, name: '9alaxy8', follow: true },
        { profileImage: profileImage, name: '1st_kwon', follow: true },
        { profileImage: profileImage, name: '1m___yuu', follow: true },
        { profileImage: profileImage, name: 'ansun_coe', follow: true },
    ];

    // const [followerData, setFollowerData] = useState([]);
    // const [page, setPage] = useState(0);
    // const [hasNextPage, setHasNextPage] = useState(true);
    // const [isFetching, setIsFetching] = useState(false);

    // useEffect(() => {
    //     fetchFollowerData(page);
    // }, [page]);

    // const fetchFollowerData = (page) => {
    //     if (isFetching || !hasNextPage) return;
    //     setIsFetching(true);

    //     // 목업 데이터를 페이지 단위로 불러옵니다
    //     setTimeout(() => {
    //         const newFollowerData = followerDataMock[page] || [];
    //         setFollowerData((prev) => [...prev, ...newFollowerData]);
    //         setHasNextPage(newFollowerData.length > 0);
    //         setIsFetching(false);
    //     }, 1000); // API 호출을 흉내 내기 위해 타임아웃을 설정합니다
    // };

    // const callNextPage = (entries) => {
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting && hasNextPage) {
    //             setPage((prev) => prev + 1);
    //         }
    //     });
    // };

    // const { setNode } = useIntersectionObserver({
    //     onIntersect: callNextPage,
    // });

    return (
        <Modal isOpen={true} onClose={onClose}>
            <Container>
                <Modal.Header title={'팔로워'} onClose={onClose} />
                <Modal.Body>
                    <Inner>
                        <Input type='text' placeholder='검색' />
                        <FollowerList>
                            {followerData.map((list, index) => (
                                <FollowerListItem key={index}>
                                    <ImageBox>
                                        <img src={list.profileImage} alt='' />
                                    </ImageBox>
                                    <InfoBox>
                                        <Name>{list.name}</Name>
                                        {!list.follow && (
                                            <Follow>∙ 팔로우</Follow>
                                        )}
                                    </InfoBox>
                                    <DeleteButton>삭제</DeleteButton>
                                </FollowerListItem>
                            ))}
                        </FollowerList>
                        {/* {isFetching && <div>로딩 중...</div>} */}
                    </Inner>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Container>
        </Modal>
    );
};

export default FollowerModal;
