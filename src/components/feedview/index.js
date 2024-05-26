import { FeedViewStyle as S } from "./index.styled";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import FeedImage from "../../asset/images/feed-view.png";
import MoreBtn from "../../asset/icons/more-btn.svg";
import LikeBtn from "../../asset/icons/like-btn.svg";
import MessageBtn from "../../asset/icons/message-btn.svg";
import MessageWhite from "../../asset/icons/message-white.svg";
import BookMark from "../../asset/icons/book-mark.svg";
import EmojiBtn from "../../asset/icons/emoji-btn.svg";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";
import React, {useCallback, useRef} from "react";
import Home from "../../asset/icons/nav-bar-home.svg";


const FeedView = () => {
    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
        textRef.current.style.height = textRef.current.scrollHeight + "px";
    }, []);

    const commentList = [
        {'sno': 0, 'profile': 'dayom_daily', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '게임하지 말구 나랑 노라죠! 😤😤😤', 'regDt': '13주', 'likeCnt': '1개'},
        {'sno': 1, 'profile': 'ho_on1204', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '항구.', 'regDt': '2일', 'likeCnt': '1개'},
        {'sno': 2, 'profile': 'babostar513', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@iam_kaming 이래서 그렇구낭..', 'regDt': '11주', 'likeCnt': '1개'},
        {'sno': 3, 'profile': 'jjy1262', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@hhrhr__ 하하😊', 'regDt': '5주', 'likeCnt': '1개'},
        {'sno': 4, 'profile': 'wodlstlswodls', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@l60___cm 너랑 나', 'regDt': '16주', 'likeCnt': '1개'},
        {'sno': 5, 'profile': 'lightwater_01', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@yk___k01 까끌까끌 수세미수염 ㅎ;;;', 'regDt': '8주', 'likeCnt': '1개'},
        {'sno': 6, 'profile': 'hz_o.i6', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@y_kiki93 앗 나는 이제 없어서 못하는군😂', 'regDt': '3일', 'likeCnt': '1개'},
        {'sno': 7, 'profile': 'ho_on1204', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@178.00gb_rem 나한테 이러면 수염 뽑혀서 다 깎구오자나', 'regDt': '1주', 'likeCnt': '1개'},
        {'sno': 8, 'profile': 'babostar513', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@pushed_7zo 더 기르면 복실복실', 'regDt': '4주', 'likeCnt': '1개'},
        {'sno': 9, 'profile': 'jjy1262', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@92o225_ 오빠랑 내 얘기 적어놨네', 'regDt': '3주', 'likeCnt': '1개'},
        {'sno': 10, 'profile': 'wodlstlswodls', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@go_hamzzi 턱수염 맛좀 봐라!', 'regDt': '6주', 'likeCnt': '1개'},
        {'sno': 11, 'profile': 'lightwater_01', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@you.new_ 이건 완죤 여보구먼...', 'regDt': '1일', 'likeCnt': '1개'},
        {'sno': 12, 'profile': 'hz_o', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@soohwa_0u0 허허..', 'regDt': '3주', 'likeCnt': '1개'},
        {'sno': 13, 'profile': 'ho_on1204', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@guswjd0413', 'regDt': '6주', 'likeCnt': '1개'},
        {'sno': 14, 'profile': 'babostar513', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '@um_jeeeee77 인누왕~ 뿌앵', 'regDt': '9시간', 'likeCnt': '1개'},
    ]

    const feedView = {
        'sno': 0, 'profile': 'dayom_daily', 'profileImage': 'https://picsum.photos/id/237/65/65', 'comment': '게임하지 말구 나랑 노라죠! 😤😤😤', 'regDt': '3일 전', 'likeCnt': '7094'
    }

    return (
        <S.Container>
            <S.Inner>
                <S.Left>
                    <S.ImageBox>
                        <img src={FeedImage} alt='feedImage'/>
                    </S.ImageBox>
                </S.Left>
                <S.Right>
                    <S.ContBox>
                        <S.Header>
                            <S.ProfileBox>
                                <S.ProfileImage to={'/'}>
                                    <img
                                        src={feedView.profileImage}
                                        alt=''
                                    />
                                </S.ProfileImage>
                                <S.ProfileCont>
                                    <S.ProfileName>
                                        <span>{feedView.profile}</span>
                                    </S.ProfileName>
                                    <S.ProfileSubCont>
                                        <span>•</span>
                                        <S.Follow>팔로우</S.Follow>
                                    </S.ProfileSubCont>
                                </S.ProfileCont>
                            </S.ProfileBox>
                            <S.MoreBtn>
                                <img
                                    src={MoreBtn}
                                    alt=''
                                />
                            </S.MoreBtn>
                        </S.Header>
                        <S.Cont>
                            <S.CommentArea>
                                <S.CommentBox>
                                    <S.ProfileImage to={'/'}>
                                        <img
                                            src={feedView.profileImage}
                                            alt=''
                                        />
                                    </S.ProfileImage>
                                    <S.CommentInfo>
                                        <S.ProfileCont>
                                            <S.ProfileName>
                                                <span>{feedView.profile}</span>
                                            </S.ProfileName>
                                            <S.Comment>
                                                <span>{feedView.comment}</span>
                                            </S.Comment>
                                        </S.ProfileCont>
                                        <S.CommentFuncBox>
                                            <time>{feedView.regDt}</time>
                                        </S.CommentFuncBox>
                                    </S.CommentInfo>
                                </S.CommentBox>
                                {commentList.map((contents, index) => (
                                    <React.Fragment key={index}>
                                        <S.CommentBox>
                                            <S.ProfileImage to={'/'}>
                                                <img
                                                    src={contents.profileImage}
                                                    alt=''
                                                />
                                            </S.ProfileImage>
                                            <S.CommentInfo>
                                                <S.ProfileCont>
                                                    <S.ProfileName>
                                                        <span>{contents.profile}</span>
                                                    </S.ProfileName>
                                                    <S.Comment>{contents.comment}</S.Comment>
                                                </S.ProfileCont>
                                                <S.CommentFuncBox>
                                                    <time>{contents.regDt}</time>
                                                    <span>좋아요 {contents.likeCnt}</span>
                                                    <span>답글 달기</span>
                                                </S.CommentFuncBox>
                                            </S.CommentInfo>
                                            <S.Like>
                                                <img
                                                    src={LikeBtn}
                                                    alt=''
                                                />
                                            </S.Like>
                                        </S.CommentBox>
                                    </React.Fragment>
                                ))}
                            </S.CommentArea>
                            <S.BottomIconArea>
                                <S.Icon>
                                    <img
                                        src={LikeBtn}
                                        alt=''
                                    />
                                </S.Icon>
                                <S.Icon>
                                    <img
                                        src={MessageBtn}
                                        alt=''
                                    />
                                </S.Icon>
                                <S.Icon>
                                    <img
                                        src={MessageWhite}
                                        alt=''
                                    />
                                </S.Icon>
                                <S.Icon>
                                    <img
                                        src={BookMark}
                                        alt=''
                                    />
                                </S.Icon>
                            </S.BottomIconArea>
                            <S.LikeBox>
                                <Link to={'/'}>
                                    <span>좋아요 {feedView.likeCnt}개</span>
                                </Link>
                            </S.LikeBox>
                            <S.DateBox>
                                <Link to={'/'}>
                                    <span>{feedView.regDt}</span>
                                </Link>
                            </S.DateBox>
                            <S.ReplyBox>
                                <S.ReplyImg>
                                    <img
                                        src={EmojiBtn}
                                        alt=''
                                    />
                                </S.ReplyImg>
                                <textarea
                                    ref={textRef}
                                    placeholder='댓글 달기...'
                                    onInput={handleResizeHeight}
                                />
                                <S.SaveBtn>
                                    <span>게시</span>
                                </S.SaveBtn>
                            </S.ReplyBox>
                        </S.Cont>
                    </S.ContBox>
                </S.Right>
            </S.Inner>
        </S.Container>
    );
}

export default FeedView;