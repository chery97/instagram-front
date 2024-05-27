import React from "react";
import { RegisterStyle as S } from "./index.styled";
import FeedView from "../../../components/feedview";

const Register = () => {

    const [email, setEmail] = React.useState("");
    const [nickName, setNickname] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordChk, setPwdCheck] = React.useState("");
    const [userName, setUserName] = React.useState("");
  
    const signup = () => {
      if (email === "" || password === "" || userName === "") {
        window.alert("아이디, 성함, 패스워드, 닉네임을 모두 입력해주세요!");
        return;
      }
  
      if (password !== passwordChk) {
        window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
        return;
      }

    };
  
    return (
        <S.Main>
            <S.Inner>
                <S.SingUpBox>
                    <S.TopInner>
                        <S.Logo></S.Logo>
                        <S.Title>
                            친구들의 사진과 동영상을 보려면 가입하세요.
                        </S.Title>
                            <S.FacebookLogin to={'/'}>
                                Facebook으로 로그인
                            </S.FacebookLogin>
                        <S.Line>또는</S.Line>
                    </S.TopInner>
                    <S.RowInner>
                        <S.InputBox>
                            <input
                            placeholder="휴대폰 번호 또는 이메일 주소"
                            _onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                                    />
                                                    <input
                            placeholder="성명"
                            _onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            />

                            <input
                            placeholder="사용자 이름"
                            _onChange={(e) => {
                                setNickname(e.target.value);
                            }}
                            />
                            <input
                            placeholder="비밀번호"
                            type="password"
                            _onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            />
                            {/* <input
                            placeholder="비밀번호 확인"
                            type="password"
                            _onChange={(e) => {
                                setPwdCheck(e.target.value);
                            }}
                            /> */}
                            <button
                            text="가입"
                            width="240px"
                            height="40px"
                            _onClick={signup}
                            />
                        </S.InputBox>
                        <S.TextBox>
                            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <span>더 알아보기</span>
                        </S.TextBox>
                        <S.RegisterButton>
                            가입
                        </S.RegisterButton>
                    </S.RowInner>
                </S.SingUpBox>
                <S.LoginBox>
                    <S.LoginText>
                        계정이 있으신가요?
                        <span>
                        로그인
                        </span>
                    </S.LoginText>
                </S.LoginBox>
                <S.DownBox>
                    앱을 다운로드하세요.
                    <S.AppDownBox>
                        {/* <img src={IOSDown} alt="" /> */}
                    </S.AppDownBox>
                </S.DownBox>
          </S.Inner>
          <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <FeedView/>
          </div>
        </S.Main>
    );
};


export default Register;







