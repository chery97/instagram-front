import styled from 'styled-components';

const Layout = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  width: 468px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeftImgBox = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  width: 100%;
  align-items: center;
`;

const RightLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  padding-bottom: 17px;
  max-width: 350px;
  width: 100%;
  align-items: center;
  border: 1px solid rgb(219, 219, 219);
`;

const LogoBox = styled.div`
  margin-top: 36px;
  margin-bottom: 12px;
`;

const Logo = styled.div`
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/yh/r/IS7e616CiR2.png");
  background-size: 176px 258px;
  width: 175px;
  height: 51px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const LoginInput = styled.input`
  margin: 0 40px 6px;
  width: 268px;
  height: 38px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
`;

const LoginBtn = styled.button`
  background-color: rgb(0, 149, 246);
  opacity: .7;
  color: white;
  font-size: 15px;
  font-weight: 900;
  border: 1px solid transparent;
  border-radius: 10px;
  width: 268px;
  height: 32px;
  margin: 8px 40px;
`;

const DividerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 77%;
  margin: 14px 40px 22px;
`;

const Divider = styled.div`
  border: 1px solid rgb(219, 219, 219);
  height: 1px;
  margin-top: 10px;
  width: 100%;
  flex-grow: 1;
`;

const DividerText = styled.p`
  margin: 0 18px;
  font-size: 14px;
  width: 90px;
`;

const FacebookLoginBox = styled.div`
  margin: 0 40px 6px;
  width: 77%;
  height: 35px;
`;

const FacebookLoginBtn = styled.button`
  height: 20px;
  border: none;
  background-color:transparent;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  display: inline-block;
`;

const FacebookIcon = styled.span`
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png");
  width: 16px;
  height: 16px;
  background-position: -414px -259px;
  background-repeat: no-repeat;
  display: inherit;
  margin-right: 5px;
`;

const FacebookText = styled.span`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #385185;
  line-height: 15px;
`;

const FindPasswordText = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #00376B;
  width: 100%;
  text-align: center;
  line-height: 15px;
  cursor: pointer;
`;

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  padding-bottom: 17px;
  max-width: 350px;
  width: 100%;
  align-items: center;
  border: 1px solid rgb(219, 219, 219);
`;

const JoinText = styled.p`
  font-size: 14px;
  font-weight: 600;
  a {
    color: #0095F6;
    font-weight: bold;
    cursor: pointer;
  }
`;

const AppIntroduceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  padding-bottom: 17px;
  max-width: 350px;
  width: 100%;
  align-items: center;
`;

const AppTextBox = styled.div`
  margin: 10px 20px;
`;

const AppText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const AppIconBox = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  a {
    &:first-child{
      margin-right: 5px;
    }
  }
  img {
    width: 135px;
    height: 40px;
  }
`;

export const LoginStyle = {
    Layout,
    Left,
    LeftImgBox,
    RightContainer,
    RightLoginForm,
    LogoBox,
    Logo,
    LoginInput,
    LoginBtn,
    DividerBox,
    Divider,
    DividerText,
    FacebookLoginBox,
    FacebookLoginBtn,
    FacebookIcon,
    FacebookText,
    FindPasswordText,
    JoinBox,
    JoinText,
    AppIntroduceBox,
    AppTextBox,
    AppText,
    AppIconBox,
}