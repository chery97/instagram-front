import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.main`
`

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 15px auto;
    width: 350px;
    font-weight: 500;
`;

const SingUpBox = styled.section`
    padding: 40px;
    border: 1px solid rgb(219,219,219);
    text-align: center;
`;

const LoginBox = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px;
    border: 1px solid rgb(219,219,219);
    font-size: 1.4rem;
`;

const Logo = styled.div`
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yh/r/IS7e616CiR2.png);
    background-position: 0px 0px;
    background-size: 176px 258px;
    width: 175px;
    height: 55px;
`;

const Title = styled.h3`
    font-size: 1.6rem;
    font-weight: 700;
    color: rgba(115,115,115);
`

const FacebookLogin = styled(Link)`
    display: block;
    width: 100%;
    padding: 7px 15px;
    background: rgba(0,149,246);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    color:#fff;
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;

    input{
        background: rgba(250, 250, 250);
        border: 1px solid rgb(219, 219, 219);
        border-radius: 3px;
        padding: 10px 7px;
        font-size: 12px;
        color: #000;
    }
`

const TextBox = styled.div`
    margin: 5px 0 15px;
    font-size: 12px;
    line-height: 1.35;
    text-align: left;
    color: #737373;
    
    span{
        color: rgba(0, 55, 107);
    }
`

const RegisterButton = styled.button`
    display: inline-block;
    width: 100%;
    padding: 7px 15px;
    background: rgba(0, 149, 246, .7);
    border-radius: 8px;
    font-size: 1.4rem;
    font-weight: 900;
    color:#fff;
`

const TopInner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const Line = styled.div`
position: relative;
width: 100%;
padding: 10px;
font-size: 13px;
font-weight: 600;
color: #737373;

&::before{
    content:"";
    position: absolute;
    top: 50%;
    left: 0;
    width: 105px;
    height: 1px;
    background: rgba(219,219,219);
}

&::after{
    content:"";
    position: absolute;
    top: 50%;
    right: 0;
    width: 105px;
    height: 1px;
    background: rgba(219,219,219);
}
`

const RowInner = styled.div`
    margin-top: 10px;
`

const LoginText = styled.div`
span{
    display: inline-block;
    margin-left: 2px;
    font-weight: 700;
    color: #0095f6;
}
`;

const DownBox = styled.section`
    padding: 10px 0;
    font-size: 1.4rem;
`

const AppDownBox = styled.div`

`

export const RegisterStyle = {
    Main,
    Inner,
    SingUpBox,
    LoginBox,
    Logo,
    Title,
    FacebookLogin,
    InputBox,
    TextBox,
    RegisterButton,
    TopInner,
    Line,
    RowInner,
    LoginText,
    DownBox,
    AppDownBox,
}