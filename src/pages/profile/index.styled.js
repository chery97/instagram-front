import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Main = styled.main``;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Contents = styled.div`
    width: 100%;
`;

const ProfileContents = styled.div`
    width: calc(100% - 40px);
    max-width: 935px;
    flex-grow: 1;
    padding: 30px 20px 0 20px;
    margin: 0 auto 30px auto;
`;

const DashBoard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 45px;
`;
const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;
const Highlight = styled.div``;
const ImageBox = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    width: 210px;

    img {
        width: 150px;
    }
`;
const Tooltip = styled.span`
    position: absolute;
    top: 0;
    left: 30%;
    padding: 15px 7px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    color: #737373;
`;
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const TopRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const Name = styled.div`
    margin-right: 10px;
    font-size: 20px;
    font-weight: 500;
`;
const LinkTag = styled(Link)`
    span {
        padding: 9px 15px;
        background: #efefef;
        border-radius: 7px;
        font-size: 14px;
        font-weight: 600;
    }
`;
const Setting = styled.div``;
const MiddleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`;
const Post = styled.div`
    font-size: 16px;

    strong {
        font-weight: 700;
    }
`;
const Follower = styled.div`
    font-size: 16px;
    cursor: pointer;

    strong {
        font-weight: 700;
    }
`;
const Follow = styled.div`
    font-size: 16px;
    cursor: pointer;

    strong {
        font-weight: 700;
    }
`;
const BottomRow = styled.div`
    text-align: left;
    font-size: 14px;
    font-weight: 700;
`;

const FeedTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-color: rgb(38, 38, 38);
    border-top-width: 1px;
    border-top-style: solid;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
`;

const FeedTabCont = styled(Link)`
    display: flex;
    align-items: center;
    margin: -1px 60px 0 0;
    height: 52px;
    color: #a8a8a8;
    &:last-child {
        margin: 0;
    }

    img {
        width: 12px;
        height: 12px;
    }

    span {
        margin-left: 6px;
    }
`;

const Feed = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const FeedCont = styled.div`
    position: relative;
    display: flex;
    width: calc((100% - 8px) / 3);
    height: 307.67px;
    margin-bottom: 4px;
    margin-right: 4px;

    &:nth-child(3n) {
        margin-right: 0px;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const ReelsFeed = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;

const ReelsCont = styled.div`
    position: relative;
    display: flex;
    width: calc((100% - 12px) / 4);
    height: 307.67px;
    margin-bottom: 4px;
    margin-right: 4px;

    &:nth-child(4n) {
        margin-right: 0px;
    }

    img {
        width: 100%;
        object-fit: cover;
    }
`;

export const ProfileStyled = {
    Main,
    Inner,
    Contents,
    ProfileContents,
    FeedTab,
    FeedTabCont,
    Feed,
    FeedCont,
    ReelsFeed,
    ReelsCont,
    DashBoard,
    Profile,
    Highlight,
    ImageBox,
    Tooltip,
    InfoBox,
    TopRow,
    Name,
    LinkTag,
    Setting,
    MiddleRow,
    Post,
    Follower,
    Follow,
    BottomRow,
};
