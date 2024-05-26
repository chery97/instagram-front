import styled from 'styled-components';
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border: 1px solid;
    width: 90%;
    height: 90%;
`;

const Inner = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    height: 100%;
`;

const Left = styled.div`
    position: relative;
    flex-grow: 10;
    width: 100vw;
    height: 100%;
`;

const ImageBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    
    img {
        position: absolute;
        display: block;
        width: 100%;
        object-fit: cover;
    }
`;

const Right = styled.div`
    flex-grow: 2;
    width: 62vw;
    font-size: 20px;
`;

const ContBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 4px 14px 16px;
    border-left: 1px solid rgb(38, 38, 38);
    border-bottom: 1px solid rgb(38, 38, 38);
`;

const ProfileBox = styled.div`
    display: flex;
    flex-grow: 1;
`;

const ProfileImage = styled(Link)`
    width: 32px;
    height: 32px;
    
    img {
        object-fit: cover;
        border-radius: 15px;
    }
`;

const ProfileCont = styled.div`
    display: flex;
    align-items: center;
    margin-left: 14px;
    color: white;
    font-size: 14px;
    font-weight: bold;
`;

const ProfileName = styled.h3`
   
`;

const ProfileSubCont = styled.div`
    span {
        margin: 0 4px;
    }
`;

const Follow = styled.button`
    color: #0095F6;
    font-size: 14px;
    font-weight: bold;
`;

const MoreBtn = styled.div`

`;

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    height: 94%;
`;

const CommentArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
    height: 80%;
    overflow: scroll;
    border-left: 1px solid rgb(38, 38, 38);
    border-bottom: 1px solid rgb(38, 38, 38);
    &::-webkit-scrollbar {
        display: none;
    }
`;

const CommentBox = styled.div`
    display: flex;
    height: 80%;
    margin-bottom: 16px;
    padding-top: 12px;
`;

const CommentInfo = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
`;

const Like = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

const CommentFuncBox = styled.div`
    display: flex;
    margin: 8px 0 4px 14px;
    color: #A8A8A8;
    font-size: 12px;

    time {
        margin-right: 12px;
    }
    span {
        margin-right: 12px;
    }
`;

const Comment = styled.h2`
    margin-left: 4px;
    display: inline !important;
`;

const BottomIconArea = styled.div`
    display: flex;
    padding: 6px 10px 8px;
    & > div:last-child {
        margin-left: auto;
    }
    img {
        width: 24px;
        height: 24px;
    }
`;

const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;

const LikeBox = styled.div`
    display: flex;
    margin-bottom: 4px;
    padding: 0 16px;
    color: white;
    border-left: 1px solid rgb(38, 38, 38);
    font-size: 14px;
    font-weight: bold;
`;

const DateBox = styled.div`
    display: flex;
    padding-left: 16px;
    margin-bottom: 16px;
    border-left: 1px solid rgb(38, 38, 38);
    //border-bottom: 1px solid rgb(38, 38, 38);
    font-size: 14px;
    font-weight: bold;
    
    span {
        color: #A8A8A8;
        font-size: 12px;
    }
`;

const ReplyBox = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px 6px 0;
    border-left: 1px solid rgb(38, 38, 38);
    border-top: 1px solid rgb(38, 38, 38);
    overflow: auto;

    textarea {
        flex-grow: 1;
        height: 20px;
        resize: none;
        border: none;
        outline: none;
        background-color: black;
        max-height: 80px;
        color: white;

        &::-webkit-scrollbar {
            width: 10px;
            background: rgba(255, 255, 255, 0.42);
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.4);
            border-radius: 6px;
        }
    }
`;

const ReplyImg = styled.div`
    padding: 8px 16px;
`;

const SaveBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .5;
    color: rgb(179, 219, 255);
    font-size: 14px;
    font-weight: bold;
    
    span {
        margin-left: 8px;
    }
`;

export const FeedViewStyle = {
    Container,
    Inner,
    Left,
    ImageBox,
    Right,
    ContBox,
    Header,
    ProfileBox,
    ProfileImage,
    ProfileCont,
    ProfileName,
    ProfileSubCont,
    Follow,
    MoreBtn,
    Cont,
    CommentArea,
    CommentBox,
    CommentInfo,
    Like,
    CommentFuncBox,
    Comment,
    BottomIconArea,
    Icon,
    LikeBox,
    DateBox,
    ReplyBox,
    ReplyImg,
    SaveBtn
}