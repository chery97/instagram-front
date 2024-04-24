import {LoginStyle as S} from "./index.styled";

const Login = () => {
    return (
        <S.Layout>
            <S.Left></S.Left>
            <S.RightContainer>
                <S.Right>
                    <S.LogoBox>
                        <S.Logo></S.Logo>
                    </S.LogoBox>
                    <S.LoginInput type="text" name="userName" placeholder="전화번호, 사용자 이름 또는 이메일"></S.LoginInput>
                    <S.LoginInput type="text" name="password" placeholder="비밀번호"></S.LoginInput>
                    <S.LoginBtn>로그인</S.LoginBtn>
                    <S.DividerBox>
                        <S.Divider></S.Divider>
                        <S.DividerText>또는</S.DividerText>
                        <S.Divider></S.Divider>
                    </S.DividerBox>
                </S.Right>
            </S.RightContainer>
        </S.Layout>
    )
};

export default Login;