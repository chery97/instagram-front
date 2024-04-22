import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const Left = styled.div`
  height: 581px;
  width: 468px;
  background-image: url("https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk");
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  border: 1px solid rgb(219, 219, 219);
  width: 100%;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  max-width: 350px;
  width: 100%;
  align-items: center;
`;

const LogoBox = styled.div`
  
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
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 10px;
  width: 268px;
  height: 32px;
`;

const DividerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 77%;
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


const Login = () => {
    return (
        <Layout>
            <Left></Left>
            <RightContainer>
                <Right>
                    <LogoBox>
                        <Logo></Logo>
                    </LogoBox>
                    <LoginInput type="text" name="userName" placeholder="전화번호, 사용자 이름 또는 이메일"></LoginInput>
                    <LoginInput type="text" name="password" placeholder="비밀번호"></LoginInput>
                    <LoginBtn>로그인</LoginBtn>
                    <DividerBox>
                        <Divider></Divider>
                        <DividerText>또는</DividerText>
                        <Divider></Divider>
                    </DividerBox>
                </Right>
            </RightContainer>
        </Layout>
    )
};

export default Login;