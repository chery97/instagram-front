import React, { useMemo } from 'react';

import { MainFeedStyled as S } from './index.styled';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { isMobile } from '../../utils/mediaQueries';

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

    return (
        <S.Main>
            <S.Inner>
                <nav style={{ width: '245px' }}>navBar componenets</nav>
                <S.Contents>
                    <S.MainContents>
                        <S.StorySection>
                            <S.SwiperWrap {...Settings}>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                                <S.Slide>
                                    <S.ImageBox>
                                        <img
                                            src='https://picsum.photos/id/237/65/65'
                                            alt=''
                                        />
                                    </S.ImageBox>
                                    <span>Name</span>
                                </S.Slide>
                            </S.SwiperWrap>
                        </S.StorySection>
                        <S.FeedSection>
                            <S.Feed>
                                <S.Header>
                                    <div>
                                        <S.Profile>
                                            <img
                                                src='https://picsum.photos/id/237/65/65'
                                                alt=''
                                            />
                                        </S.Profile>
                                        <S.Name>lovtaeha</S.Name>
                                        <S.Time>2일</S.Time>
                                    </div>
                                    <S.AddButton>...</S.AddButton>
                                </S.Header>
                                <S.Photo>
                                    <S.SwiperWrap {...SettingsFeed}>
                                        <S.Slide>
                                            {' '}
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </S.Slide>
                                        <S.Slide>
                                            {' '}
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </S.Slide>
                                        <S.Slide>
                                            {' '}
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </S.Slide>
                                        <S.Slide>
                                            {' '}
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </S.Slide>
                                        <S.Slide>
                                            {' '}
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </S.Slide>
                                        <S.Slide>
                                            {' '}
                                            <img
                                                src='https://picsum.photos/id/237/500/500'
                                                alt=''
                                            />
                                        </S.Slide>
                                    </S.SwiperWrap>
                                </S.Photo>
                                <S.ActionIcon>
                                    <div>
                                        <S.Like>좋아요</S.Like>
                                        <S.Reply>댓글</S.Reply>
                                        <S.Share>공유</S.Share>
                                    </div>
                                    <S.BookMark>저장</S.BookMark>
                                </S.ActionIcon>
                                <S.LikePeople>
                                    님 <span>여러 명</span>이 좋아합니다
                                </S.LikePeople>
                                <S.Post>
                                    <S.Name>lovtaeha</S.Name>
                                    <S.Text>
                                        어린이 날 스스로 계획한대로...{' '}
                                        <span>더보기</span>
                                    </S.Text>
                                </S.Post>
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
