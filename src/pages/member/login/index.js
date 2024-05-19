import { LoginStyle as S } from "./index.styled";
import Navbar from "../../../components/navbar";
import { Pc, Tablet } from "../../../hooks/useDevice";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <S.Layout>
            <Pc>
                <Navbar/>
                <S.Left>
                    <img src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"/>
                    <S.LeftImgBox></S.LeftImgBox>
                </S.Left>
            </Pc>
            <Tablet>
                <Navbar/>
                <S.Left>
                    <img src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk"/>
                    <S.LeftImgBox></S.LeftImgBox>
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
                        <a href='../member/register'>가입하기</a>
                    </S.JoinText>
                </S.JoinBox>
                <S.AppIntroduceBox>
                    <S.AppTextBox>
                        <S.AppText>앱을 다운로드하세요.</S.AppText>
                    </S.AppTextBox>
                    <S.AppIconBox>
                        <Link to={"https://apps.apple.com/app/instagram/id389801252?ct=igweb.loginPage.badge&mt=8&pt=428156&vt=lo"} target="_blank">
                            <img src="https://static.cdninstagram.com/rsrc.php/v3/yi/r/cWx_hQBPmbo.png"/>
                        </Link>
                        <Link to={"https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D16A57D8B-213A-4302-B144-D31EF57E3E0D%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge"} target="_blank">
                            <img src="https://static.cdninstagram.com/rsrc.php/v3/ye/r/UtJtFmFLCiD.png"/>
                        </Link>
                    </S.AppIconBox>
                </S.AppIntroduceBox>
            </S.RightContainer>
        </S.Layout>
    )
};

export default Login;