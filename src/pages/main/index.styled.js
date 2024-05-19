import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const Main = styled.main``;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Contents = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 65px;
    margin-top: 35px;
`;

const MainContents = styled.div`
    width: 100%;
    max-width: 630px;
`;

const StorySection = styled.section`
    .swiper-slide {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`;
const ImageBox = styled.div`
    border: 2px solid #000;
    border-radius: 50%;
    overflow: hidden;
`;

const SwiperWrap = styled(Swiper)``;
const Slide = styled(SwiperSlide)``;
SwiperWrap.displayName = 'Swiper';
Slide.displayName = 'SwiperSlide';

const FeedSection = styled.section`
    width: 100%;
    max-width: 470px;
    padding: 30px 0;
    margin: 0 auto;
    font-size: 14px;
`;

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 15px;
    }
`;

const Profile = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
`;

const Name = styled.div`
    font-weight: bold;
`;

const Time = styled.div`
    color: #737373;
`;

const AddButton = styled.div`
    font-size: 24px !important;
    letter-spacing: 0.5px;
`;

const Photo = styled.div``;
const ActionIcon = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        gap: 16px;
    }
`;
const Like = styled.div``;
const Reply = styled.div``;
const Share = styled.div``;
const BookMark = styled.div``;
const LikePeople = styled.div`
    text-align: left;

    span {
        font-weight: bold;
    }
`;

const Post = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Text = styled.div``;

const Recommend = styled.div`
    width: 320px;
    padding: 20px 0;
    font-size: 14px;
`;

const ProfileBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
        display: flex;
        align-items: center;
        gap: 12px;

        > a:not(:last-child) {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            overflow: hidden;
        }

        .profileLink {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 3px;

            span {
                color: #737373;
            }
        }
    }

    button {
        font-size: 12px;
        font-weight: 700;
        color: #0095f6;
    }
`;

const RecommendProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 30px;
`;

const RecommendText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: 700;
        color: #737373;
    }

    a > span {
        font-size: 12px;
        color: #000;
    }
`;

export const MainFeedStyled = {
    Main,
    Inner,
    Contents,
    MainContents,
    StorySection,
    SwiperWrap,
    Slide,
    ImageBox,
    FeedSection,
    Feed,
    Header,
    Profile,
    Name,
    Time,
    AddButton,
    Photo,
    ActionIcon,
    Like,
    Reply,
    Share,
    BookMark,
    LikePeople,
    Post,
    Text,
    Recommend,
    ProfileBox,
    RecommendProfile,
    RecommendText,
};
