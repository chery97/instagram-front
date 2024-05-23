import { LoginStyle as S } from "./index.styled";
import Navbar from "../../../components/navbar";
import { mediaQueries, Pc, Tablet } from "../../../hooks/useDevice";
import {Link} from "react-router-dom";
import Insta1 from "../../../asset/images/insta-main-1.png"
import Insta2 from "../../../asset/images/insta-main-2.png"
import Insta3 from "../../../asset/images/insta-main-3.png"
import Insta4 from "../../../asset/images/insta-main-4.png"
import Android from "../../../asset/images/android-down.png"
import Ios from "../../../asset/images/ios-down.png"
import Phones from "../../../asset/images/insta-main-phones.png"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Login = () => {
    return (
        <S.Layout>
            <Pc>
                <S.Left>
                <S.Img>
                    <S.LeftImgBox>
                        <Swiper
                            speed={2000}
                            spaceBetween={30}
                            effect={'fade'}
                            allowTouchMove={false}
                            centeredSlides={true}
                            navigation={false}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, EffectFade, Navigation, Pagination]}
                            className="instaMain"
                        >
                            <SwiperSlide>
                                <img src={Insta1} alt='insta-1' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Insta2} alt='insta-2' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Insta3} alt='insta-3' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Insta4} alt='insta-4' />
                            </SwiperSlide>
                        </Swiper>
                    </S.LeftImgBox>
                </S.Img>
            </S.Left>
            </Pc>
            <Tablet>
                <S.Left>
                    <S.Img>
                        <S.LeftImgBox>
                            <Swiper
                                speed={2000}
                                spaceBetween={30}
                                effect={'fade'}
                                allowTouchMove={false}
                                centeredSlides={true}
                                navigation={false}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                                className="instaMain"
                            >
                                <SwiperSlide>
                                    <img src={Insta1} alt='insta-1' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Insta2} alt='insta-2' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Insta3} alt='insta-3' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Insta4} alt='insta-4' />
                                </SwiperSlide>
                            </Swiper>
                        </S.LeftImgBox>
                    </S.Img>
                </S.Left>
            </Tablet>
            <S.RightContainer>
                <S.RightLoginForm>
                    <S.LogoBox>
                        <S.Logo />
                    </S.LogoBox>
                    <S.LoginInput type="text" name="userName" placeholder="전화번호, 사용자 이름 또는 이메일"></S.LoginInput>
                    <S.LoginInput type="text" name="password" placeholder="비밀번호"></S.LoginInput>
                    <S.LoginBtn>로그인</S.LoginBtn>
                    <S.DividerBox>
                        <S.DividerText>또는</S.DividerText>
                    </S.DividerBox>
                    <S.FacebookLoginBox>
                        <S.FacebookLoginBtn>
                            <S.FacebookIcon />
                            <S.FacebookText>Facebook으로 로그인</S.FacebookText>
                        </S.FacebookLoginBtn>
                    </S.FacebookLoginBox>
                    <S.FindPasswordText>비밀번호를 잊으셨나요?</S.FindPasswordText>
                </S.RightLoginForm>
                <S.JoinBox>
                    <S.JoinText>
                        계정이 없으신가요?
                        <Link to={"../member/register"}>가입하기</Link>
                    </S.JoinText>
                </S.JoinBox>
                <S.AppIntroduceBox>
                    <S.AppTextBox>
                        <S.AppText>앱을 다운로드하세요.</S.AppText>
                    </S.AppTextBox>
                    <S.AppIconBox>
                        <Link to={"https://apps.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo"} target="_blank">
                            <img src={Ios} alt='ios'/>
                        </Link>
                        <Link to={"https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D16A57D8B-213A-4302-B144-D31EF57E3E0D%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"} target="_blank">
                            <img src={Android} alt='android' />
                        </Link>
                    </S.AppIconBox>
                </S.AppIntroduceBox>
            </S.RightContainer>
        </S.Layout>
    )
};

export default Login;