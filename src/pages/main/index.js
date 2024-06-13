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
import FeedServiceModal from '../../components/Modal/FeedServiceModal';

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
    });

    const SettingsFeed = useMemo(() => {
        return {
            modules: [Navigation],
            slidesPerView: 1,
            navigation: {
                prevEl: '.swiper-button-prev-event',
                nextEl: '.swiper-button-next-event',
            },
        };
    });

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

    const FeedContents = [
        {
            profileImage: 'https://picsum.photos/id/237/65/65',
            name: 'ynfloral_5',
            time: dayjs().format('MM월DD일'),
            contentImage: postImageData.map((a) => a),
            likePeople: 'hanwhaeagles_soori',
            contents:
                '오늘 때려 낸 시즌 10호 홈런으로 2시즌 연속 두 자리 수 홈런 기록한 노시환🦅 홈런 치고 페라자와 행복한 시간',
        },
    ];

    const [isVisibleModal, setIsVisibleModal] = useState(false);

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
                                {FeedContents.map((item) => {
                                    return (
                                        <>
                                            <S.Header>
                                                <div>
                                                    <S.Profile>
                                                        <img
                                                            src={
                                                                item.profileImage
                                                            }
                                                            alt=''
                                                        />
                                                    </S.Profile>
                                                    <S.Name>{item.name}</S.Name>
                                                    <S.Time>{item.time}</S.Time>
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
                                                    {item.contentImage.map(
                                                        (image) => {
                                                            return (
                                                                <S.Slide
                                                                    key={
                                                                        item.name
                                                                    }
                                                                >
                                                                    {' '}
                                                                    <img
                                                                        src={
                                                                            image
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
                                                    <S.Reply>댓글</S.Reply>
                                                    <S.Share>
                                                        <img
                                                            src={Message}
                                                            alt='shareIcon'
                                                        />
                                                    </S.Share>
                                                </div>
                                                <S.BookMark>저장</S.BookMark>
                                            </S.ActionIcon>
                                            <S.LikePeople>
                                                {item.likePeople}님{' '}
                                                <span>여러 명</span>이
                                                좋아합니다
                                            </S.LikePeople>
                                            <S.Post>
                                                <S.Name>{item.name}</S.Name>
                                                <S.Text>
                                                    {item.contents}
                                                    <span>더보기</span>
                                                </S.Text>
                                            </S.Post>
                                        </>
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
