import { MainFeedStyled as S } from "./index.styled";
import React, { useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const MainFeed = () => {
  const Settings = useMemo(() => {
    return {
      modules: [Navigation],
      slidesPerView: 8,
      navigation: {
        prevEl: ".swiper-button-prev-event",
        nextEl: ".swiper-button-next-event",
      },
    };
  });

  const SettingsFeed = useMemo(() => {
    return {
      modules: [Navigation],
      slidesPerView: 1,
      navigation: {
        prevEl: ".swiper-button-prev-event",
        nextEl: ".swiper-button-next-event",
      },
    };
  });

  return (
    <S.Main>
      <S.Inner>
        <nav style={{ width: "245px" }}>navBar componenets</nav>
        <S.Contents>
          <S.MainContents>
            <S.StorySection>
              <Swiper {...Settings}>
                <S.Slide>
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
                <S.Slide>
                  {" "}
                  <img src="https://picsum.photos/id/237/65/65" alt="" />
                  <span>Slide 1</span>
                </S.Slide>
              </Swiper>
            </S.StorySection>
            <S.FeedSection>
              <S.Feed>
                <S.Header>
                  <div>
                    <S.Profile>
                      <img src="https://picsum.photos/id/237/65/65" alt="" />
                    </S.Profile>
                    <S.Name>lovtaeha</S.Name>
                    <S.Time>2일</S.Time>
                  </div>
                  <S.AddButton>...</S.AddButton>
                </S.Header>
                <S.Photo>
                  <Swiper {...SettingsFeed}>
                    <S.Slide>
                      {" "}
                      <img src="https://picsum.photos/id/237/65/65" alt="" />
                      <span>Slide 1</span>
                    </S.Slide>
                    <S.Slide>
                      {" "}
                      <img src="https://picsum.photos/id/237/65/65" alt="" />
                      <span>Slide 1</span>
                    </S.Slide>
                    <S.Slide>
                      {" "}
                      <img src="https://picsum.photos/id/237/65/65" alt="" />
                      <span>Slide 1</span>
                    </S.Slide>
                    <S.Slide>
                      {" "}
                      <img src="https://picsum.photos/id/237/65/65" alt="" />
                      <span>Slide 1</span>
                    </S.Slide>
                    <S.Slide>
                      {" "}
                      <img src="https://picsum.photos/id/237/65/65" alt="" />
                      <span>Slide 1</span>
                    </S.Slide>
                  </Swiper>
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
                    어린이 날 스스로 계획한대로... <span>더보기</span>
                  </S.Text>
                </S.Post>
              </S.Feed>
            </S.FeedSection>
          </S.MainContents>
          <S.Recommend>recommend</S.Recommend>
        </S.Contents>
      </S.Inner>
    </S.Main>
  );
};

export default MainFeed;
