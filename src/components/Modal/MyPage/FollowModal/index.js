import styled from 'styled-components';
import profileImage from '../../../../asset/images/profile.png';

const FollowModal = () => {
    const followData = [
        {
            profileImage: profileImage,
            name: '1m__yuu',

            follow: '팔로잉 버튼',
        },
        {
            profileImage: profileImage,
            name: 'tune_tape',
            follow: '팔로잉 버튼',
        },
        {
            profileImage: profileImage,
            name: 'seran_24k',
            follow: '팔로잉 버튼',
        },
        {
            profileImage: profileImage,
            name: 'j_2n__u',
            follow: '팔로잉 버튼',
        },
        {
            profileImage: profileImage,
            name: 'blax_kchexxy',
            follow: '팔로잉 버튼',
        },
        {
            profileImage: profileImage,
            name: 'xchan__g',
            follow: '팔로잉 버튼',
        },
    ];

    const Inner = styled.div``;

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
        text-align: left;
    `;

    const Name = styled.span`
        font-size: 14px;
        font-weight: 700;
    `;

    const FollowButton = styled.button`
        background: #efefef;
        padding: 9px 16px;
        border-radius: 10px;
        font-weight: 500;
    `;

    return (
        <>
            <Inner>
                <input type='text' placeholder='검색' />
                <FollowerList>
                    {followData.map((list) => (
                        <>
                            <FollowerListItem>
                                <ImageBox>
                                    <img src={list.profileImage} alt='' />
                                </ImageBox>
                                <InfoBox>
                                    <Name>{list.name}</Name>
                                </InfoBox>
                                <FollowButton>팔로잉</FollowButton>
                            </FollowerListItem>
                        </>
                    ))}
                </FollowerList>
            </Inner>
        </>
    );
};

export default FollowModal;
