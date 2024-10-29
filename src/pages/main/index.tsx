import dayjs from 'dayjs';
import React, { useMemo, useState } from 'react';

import Navbar from '../../components/navbar';
import { isMobile } from '../../utils/mediaQueries';
import { MainFeedStyled as S } from './index.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Alert from '../../asset/icons/nav-bar-alert.svg';
import Message from '../../asset/icons/nav-bar-message.svg';
import MainFeedEmoji from '../../asset/icons/main-feed-emoji.svg';
import MainFeedComment from '../../asset/icons/main-feed-comment.svg';
import MainFeedSave from '../../asset/icons/main-feed-save.svg';
import FeedServiceModal from '../../components/Modal/FeedServiceModal';
import { useQuery } from 'react-query';
import Post from '../../api/post/post';
import FeedViewModal from '../../components/Modal/FeedViewModal';

const MainFeed = () => {
    const isMobileSize = isMobile();

    const Settings = useMemo(() => {
        return {
            modules: [Navigation],
            slidesPerView: 8,
            spaceBetween: 15,
            navigation: {
                prevEl: '.swiper-button-prev-event',
                nextEl: '.swiper-button-next-event',
            },
        };
    }, []);

    const SettingsFeed = useMemo(() => {
        return {
            modules: [Navigation],
            slidesPerView: 1,
            navigation: {
                prevEl: '.swiper-button-prev-event',
                nextEl: '.swiper-button-next-event',
            },
        };
    }, []);

    const MockData = [
        {
            id: 'user1',
            imageUrl: 'https://picsum.photos/id/237/65/65',
        },
        {
            id: 'user2',
            imageUrl: 'https://picsum.photos/id/275/65/65',
        },
        {
            id: 'user3',
            imageUrl: 'https://picsum.photos/id/433/65/65',
        },
        {
            id: 'user4',
            imageUrl: 'https://picsum.photos/id/451/65/65',
        },
        {
            id: 'user5',
            imageUrl: 'https://picsum.photos/id/454/65/65',
        },
        {
            id: 'user6',
            imageUrl: 'https://picsum.photos/id/493/65/65',
        },
        {
            id: 'user7',
            imageUrl: 'https://picsum.photos/id/501/65/65',
        },
        {
            id: 'user8',
            imageUrl: 'https://picsum.photos/id/503/65/65',
        },
        {
            id: 'user9',
            imageUrl: 'https://picsum.photos/id/505/65/65',
        },
        {
            id: 'user10',
            imageUrl: 'https://picsum.photos/id/507/65/65',
        },
        {
            id: 'user11',
            imageUrl: 'https://picsum.photos/id/508/65/65',
        },
    ];

    const postImageData = [
        'https://picsum.photos/id/237/500/500',
        'https://picsum.photos/id/238/500/500',
        'https://picsum.photos/id/239/500/500',
    ];

    const { data, isFetching } = useQuery({
        queryKey: ['postList'],
        queryFn: async () => {
            const { data } = await Post.getPostList();

            return data;
        },
        enabled: true,
    });

    const FeedContents = data;

    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [isViewVisibleModal, setIsViewVisibleModal] = useState(false);

    return (
        <S.Main>
            {isVisibleModal ? (
                <>
                    <FeedServiceModal
                        onClose={() => setIsVisibleModal(false)}
                    />
                </>
            ) : (
                <></>
            )}
            {isViewVisibleModal ? (
                <>
                    <FeedViewModal
                        onClose={() => setIsViewVisibleModal(false)}
                    />
                </>
            ) : (
                <></>
            )}
            <S.Inner>
                <Navbar />
                <S.Contents>
                    <S.MainContents>
                        <S.StorySection>
                            <S.SwiperWrap {...Settings}>
                                {MockData.map((item) => {
                                    return (
                                        <S.Slide key={item.id}>
                                            <S.ImageBox>
                                                <img
                                                    src={item.imageUrl}
                                                    alt=''
                                                />
                                            </S.ImageBox>
                                            <span>{item.id}</span>
                                        </S.Slide>
                                    );
                                })}
                            </S.SwiperWrap>
                        </S.StorySection>
                        <S.FeedSection>
                            <S.Feed>
                                {FeedContents?.map((item, index) => {
                                    return (
                                        <React.Fragment
                                            key={`${item.userName}-${index}`}
                                        >
                                            {' '}
                                            {/* 인덱스를 추가하여 유일성 보장 */}
                                            <S.Header>
                                                <div>
                                                    <S.Profile>
                                                        <img
                                                            src={
                                                                item.userProfileImage
                                                            }
                                                            alt=''
                                                        />
                                                    </S.Profile>
                                                    <S.Name>
                                                        {item.userName}
                                                    </S.Name>
                                                    <S.Time>
                                                        {dayjs(
                                                            item.createdAt,
                                                            'YYYY-MM-DD HH:mm:ss',
                                                        ).format('MM월DD일')}
                                                    </S.Time>
                                                </div>
                                                <S.AddButton
                                                    onClick={() =>
                                                        setIsVisibleModal(true)
                                                    }
                                                >
                                                    ...
                                                </S.AddButton>
                                            </S.Header>
                                            <S.Photo>
                                                <S.SwiperWrap {...SettingsFeed}>
                                                    {item.imageUrls.map(
                                                        (image, imgIndex) => {
                                                            return (
                                                                <S.Slide
                                                                    key={`${item.userName}-image-${imgIndex}`}
                                                                >
                                                                    <img
                                                                        src={
                                                                            image.url
                                                                        }
                                                                        alt=''
                                                                    />
                                                                </S.Slide>
                                                            );
                                                        },
                                                    )}
                                                </S.SwiperWrap>
                                            </S.Photo>
                                            <S.ActionIcon>
                                                <div>
                                                    <S.Like>
                                                        <img
                                                            src={Alert}
                                                            alt='likeIcon'
                                                        />
                                                    </S.Like>
                                                    <S.Reply>
                                                        <img
                                                            src={
                                                                MainFeedComment
                                                            }
                                                            alt='mainFeedCommentIcon'
                                                            onClick={() =>
                                                                setIsViewVisibleModal(
                                                                    true,
                                                                )
                                                            }
                                                        />
                                                    </S.Reply>
                                                    <S.Share>
                                                        <img
                                                            src={Message}
                                                            alt='shareIcon'
                                                        />
                                                    </S.Share>
                                                </div>
                                                <S.BookMark>
                                                    <img
                                                        src={MainFeedSave}
                                                        alt='mainFeedSaveIcon'
                                                    />
                                                </S.BookMark>
                                            </S.ActionIcon>
                                            <S.LikePeople>
                                                {item.userName}님{' '}
                                                <span>여러 명</span>이
                                                좋아합니다
                                            </S.LikePeople>
                                            <S.Post>
                                                <S.Name>{item.userName}</S.Name>
                                                <S.Text>
                                                    {item.contents}
                                                    <span>더보기</span>
                                                </S.Text>
                                            </S.Post>
                                            {item.comments.length > 0 && (
                                                <S.Comment>
                                                    <S.Text
                                                        onClick={() =>
                                                            setIsViewVisibleModal(
                                                                true,
                                                            )
                                                        }
                                                    >
                                                        댓글{' '}
                                                        {item.comments.length}개
                                                        모두 보기
                                                    </S.Text>
                                                </S.Comment>
                                            )}
                                            <S.CommentInputBox>
                                                <input
                                                    placeholder={'댓글 달기...'}
                                                />
                                                <img
                                                    src={MainFeedEmoji}
                                                    alt='mainFeedEmojiIcon'
                                                />
                                            </S.CommentInputBox>
                                        </React.Fragment>
                                    );
                                })}
                            </S.Feed>
                        </S.FeedSection>
                    </S.MainContents>
                    {!isMobileSize && (
                        <S.Recommend>
                            <S.ProfileBox>
                                <div>
                                    <a
                                        href='/'
                                        style={{
                                            height: '44px',
                                            width: '44px',
                                        }}
                                    >
                                        <img
                                            src='https://picsum.photos/id/237/500/500'
                                            alt=''
                                        />
                                    </a>
                                    <a className='profileLink' href='/'>
                                        ynfloral__5
                                        <span>오젼</span>
                                    </a>
                                </div>
                                <button>전환</button>
                            </S.ProfileBox>
                            <S.RecommendProfile>
                                <S.RecommendText>
                                    <span>회원님을 위한 추천</span>
                                    <a href='/'>
                                        <span>모두 보기</span>
                                    </a>
                                </S.RecommendText>
                                <S.ProfileBox>
                                    <div>
                                        <a
                                            href='/'
                                            style={{
                                                height: '44px',
                                                width: '44px',
                                            }}
                                        >
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </a>
                                        <a className='profileLink' href='/'>
                                            ynfloral__5
                                            <span>오젼</span>
                                        </a>
                                    </div>
                                    <button>전환</button>
                                </S.ProfileBox>
                                <S.ProfileBox>
                                    <div>
                                        <a
                                            href='/'
                                            style={{
                                                height: '44px',
                                                width: '44px',
                                            }}
                                        >
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </a>
                                        <a className='profileLink' href='/'>
                                            ynfloral__5
                                            <span>오젼</span>
                                        </a>
                                    </div>
                                    <button>전환</button>
                                </S.ProfileBox>

                                <S.ProfileBox>
                                    <div>
                                        <a
                                            href='/'
                                            style={{
                                                height: '44px',
                                                width: '44px',
                                            }}
                                        >
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </a>
                                        <a className='profileLink' href='/'>
                                            ynfloral__5
                                            <span>오젼</span>
                                        </a>
                                    </div>
                                    <button>전환</button>
                                </S.ProfileBox>
                            </S.RecommendProfile>
                        </S.Recommend>
                    )}
                </S.Contents>
            </S.Inner>
        </S.Main>
    );
};

export default MainFeed;
