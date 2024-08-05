import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';
import article from '../../asset/icons/profile/article.svg';
import reels from '../../asset/icons/profile/reels.svg';
import tagged from '../../asset/icons/profile/tagged.svg';
import feed1 from '../../asset/images/feed-1.png';
import feed2 from '../../asset/images/feed-2.jpeg';
import feed3 from '../../asset/images/feed-3.jpeg';
import feed4 from '../../asset/images/feed-4.jpeg';
import feed5 from '../../asset/images/feed-5.jpeg';
import feed6 from '../../asset/images/feed-6.jpeg';
import feed7 from '../../asset/images/feed-7.jpeg';
import feed8 from '../../asset/images/feed-8.jpeg';
import feed9 from '../../asset/images/feed-9.jpeg';
import profileImage from '../../asset/images/profile.png';
import FollowerModal from '../../components/Modal/MyPage/FollowerModal';
import Navbar from '../../components/navbar';
import { ProfileStyled as S } from './index.styled';
import FollowModal from '../../components/Modal/MyPage/FollowModal';
import { feed } from '../../api/feed';

const ProfileView = () => {
    const params = useParams();
    const location = useLocation();

    // 현재 경로를 '/'로 분리하여 배열로 변환
    const pathSegments = location.pathname.split('/');
    // 마지막 경로 파라미터를 추출
    const lastSegment = pathSegments[pathSegments.length - 1];

    const tabCont = [
        { id: 'article', label: '게시물', image: { article } },
        { id: 'reels', label: '릴스', image: { reels } },
        { id: 'tagged', label: '태그됨', image: { tagged } },
    ];

    tabCont.map((contents) => {
        const id = contents.id;
        contents.image = contents.image[id];
    });

    const profile = [
        {
            memImage: profileImage,
            memId: 'ynfloral__5',
            memName: '오젼',
            postCnt: '1',
            followerCnt: '205',
            followCnt: '190',
        },
    ];

    const [isVisibleFollowerModal, setIsVisibleFollowerModal] = useState(false);
    const [isVisibleFollowModal, setIsVisibleFollowModal] = useState(false);

    let feedCont;
    const {
        data: feedList,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['feedList'],
        queryFn: async () => await feed.getFeed(),
        select: (res) => res.data,
    });
    console.log(feedList);
    if (pathSegments.length === 3) {
        feedCont = [
            { sno: 1, likeCnt: '244.4만', commentCnt: '6305', image: feed1 },
            { sno: 2, likeCnt: '121.5만', commentCnt: '3596', image: feed2 },
            { sno: 3, likeCnt: '17.6만', commentCnt: '487', image: feed3 },
            { sno: 4, likeCnt: '934', commentCnt: '11', image: feed4 },
            { sno: 5, likeCnt: '2867', commentCnt: '43', image: feed5 },
            { sno: 6, likeCnt: '2596', commentCnt: '41', image: feed6 },
            { sno: 7, likeCnt: '2100', commentCnt: '46', image: feed7 },
            { sno: 8, likeCnt: '3755', commentCnt: '36', image: feed8 },
            { sno: 9, likeCnt: '1052', commentCnt: '25', image: feed9 },
            { sno: 10, likeCnt: '934', commentCnt: '11', image: feed4 },
            { sno: 11, likeCnt: '2596', commentCnt: '41', image: feed6 },
            { sno: 12, likeCnt: '3755', commentCnt: '36', image: feed8 },
        ];
    }

    if (lastSegment === 'tagged') {
        feedCont = [
            { sno: 1, likeCnt: '244.4만', commentCnt: '6305', image: feed1 },
            { sno: 2, likeCnt: '17.6만', commentCnt: '487', image: feed3 },
            { sno: 3, likeCnt: '121.5만', commentCnt: '3596', image: feed2 },
            { sno: 4, likeCnt: '934', commentCnt: '11', image: feed4 },
            { sno: 5, likeCnt: '2596', commentCnt: '41', image: feed6 },
            { sno: 6, likeCnt: '2867', commentCnt: '43', image: feed5 },
            { sno: 7, likeCnt: '3755', commentCnt: '36', image: feed8 },
            { sno: 8, likeCnt: '2100', commentCnt: '46', image: feed7 },
            { sno: 9, likeCnt: '1052', commentCnt: '25', image: feed9 },
        ];
    } else if (lastSegment === 'reels') {
        feedCont = [
            { sno: 1, likeCnt: '244.4만', commentCnt: '6305', image: feed1 },
            { sno: 2, likeCnt: '121.5만', commentCnt: '3596', image: feed2 },
            { sno: 3, likeCnt: '17.6만', commentCnt: '487', image: feed3 },
            { sno: 4, likeCnt: '934', commentCnt: '11', image: feed4 },
            { sno: 5, likeCnt: '2867', commentCnt: '43', image: feed5 },
            { sno: 6, likeCnt: '2596', commentCnt: '41', image: feed6 },
            { sno: 7, likeCnt: '2100', commentCnt: '46', image: feed7 },
            { sno: 8, likeCnt: '3755', commentCnt: '36', image: feed8 },
            { sno: 9, likeCnt: '1052', commentCnt: '25', image: feed9 },
            { sno: 10, likeCnt: '1052', commentCnt: '25', image: feed8 },
            { sno: 11, likeCnt: '1052', commentCnt: '25', image: feed7 },
            { sno: 12, likeCnt: '1052', commentCnt: '25', image: feed6 },
        ];
    }

    const onFollowerModalOpen = () => {
        setIsVisibleFollowerModal(true);
    };

    return (
        <S.Main>
            {/* {isVisibleFollowerModal ? (
                <FollowerModal
                    isOpen={isVisibleFollowerModal}
                    onClose={() => setIsVisibleFollowerModal(false)}
                />
            ) : (
                <></>
            )} */}
            {isVisibleFollowModal ? <FollowModal /> : <></>}

            <S.Inner>
                <Navbar />
                <S.Contents>
                    <S.ContentsInner>
                        <S.ProfileContents>
                            {/* joy님 해주세요 */}
                            <S.DashBoard>
                                <S.Profile>
                                    {profile.map((item) => (
                                        <>
                                            <S.ImageBox>
                                                <img
                                                    src={item.memImage}
                                                    alt=''
                                                />
                                                <S.Tooltip>메모</S.Tooltip>
                                            </S.ImageBox>
                                            <S.InfoBox>
                                                <S.TopRow>
                                                    <S.Name>
                                                        {item.memId}
                                                    </S.Name>
                                                    <S.LinkTag to=''>
                                                        <span>프로필 편집</span>
                                                    </S.LinkTag>
                                                    <S.LinkTag to=''>
                                                        <span>
                                                            보관된 스토리 보기
                                                        </span>
                                                    </S.LinkTag>
                                                    <S.Setting></S.Setting>
                                                </S.TopRow>
                                                <S.MiddleRow>
                                                    <S.Post>
                                                        게시물{' '}
                                                        <strong>
                                                            {item.postCnt}
                                                        </strong>
                                                    </S.Post>
                                                    <S.Follower
                                                        onClick={
                                                            onFollowerModalOpen
                                                        }
                                                    >
                                                        팔로워{' '}
                                                        <strong>
                                                            {item.followerCnt}
                                                        </strong>
                                                    </S.Follower>
                                                    <S.Follow
                                                        onClick={() =>
                                                            setIsVisibleFollowModal(
                                                                true,
                                                            )
                                                        }
                                                    >
                                                        팔로우{' '}
                                                        <strong>
                                                            {item.followCnt}
                                                        </strong>
                                                    </S.Follow>
                                                </S.MiddleRow>
                                                <S.BottomRow>
                                                    {item.memName}
                                                </S.BottomRow>
                                            </S.InfoBox>
                                        </>
                                    ))}
                                </S.Profile>
                                <S.Highlight></S.Highlight>
                            </S.DashBoard>
                            <S.FeedTab>
                                {tabCont.map((contents) => (
                                    <S.FeedTabCont
                                        to={
                                            contents.id === 'article'
                                                ? `/profile/${params.memId}`
                                                : `/profile/${params.memId}/${contents.id}`
                                        }
                                        key={contents.id}
                                    >
                                        <img src={contents.image} />
                                        <span>{contents.label}</span>
                                    </S.FeedTabCont>
                                ))}
                            </S.FeedTab>
                            {lastSegment === 'reels' ? (
                                <S.ReelsFeed>
                                    {feedCont.map((cont, key) => (
                                        <S.ReelsCont key={cont.sno}>
                                            <img src={cont.image} />
                                            <S.ReelsFeedHover key={key}>
                                                <S.ReelsFeedHoverBox>
                                                    <li>
                                                        <S.HoverLikeIcon>
                                                            <span />
                                                            <span>
                                                                {cont.likeCnt}
                                                            </span>
                                                        </S.HoverLikeIcon>
                                                    </li>
                                                    <li>
                                                        <S.HoverCommentIcon>
                                                            <span />
                                                            <span>
                                                                {
                                                                    cont.commentCnt
                                                                }
                                                            </span>
                                                        </S.HoverCommentIcon>
                                                    </li>
                                                </S.ReelsFeedHoverBox>
                                            </S.ReelsFeedHover>
                                        </S.ReelsCont>
                                    ))}
                                </S.ReelsFeed>
                            ) : (
                                <S.Feed>
                                    {feedCont.map((cont, key) => (
                                        <S.FeedCont key={cont.sno}>
                                            <img src={cont.image} />
                                            <S.FeedHover key={key}>
                                                <S.FeedHoverBox>
                                                    <li>
                                                        <S.HoverLikeIcon>
                                                            <span />
                                                            <span>
                                                                {cont.likeCnt}
                                                            </span>
                                                        </S.HoverLikeIcon>
                                                    </li>
                                                    <li>
                                                        <S.HoverCommentIcon>
                                                            <span />
                                                            <span>
                                                                {
                                                                    cont.commentCnt
                                                                }
                                                            </span>
                                                        </S.HoverCommentIcon>
                                                    </li>
                                                </S.FeedHoverBox>
                                            </S.FeedHover>
                                        </S.FeedCont>
                                    ))}
                                </S.Feed>
                            )}
                        </S.ProfileContents>
                    </S.ContentsInner>
                </S.Contents>
            </S.Inner>
        </S.Main>
    );
};

export default ProfileView;
