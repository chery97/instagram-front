import styled from 'styled-components';
import { mediaQueries } from '../../utils/mediaQueries';

const DimmedContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    top: 0;
    background-color: #000000;
    opacity: 0.24;
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
`;

const ModalContainer = styled.div<{ $isFullSize?: boolean }>`
    z-index: 13;
    position: fixed;
    width: 100vw;
    bottom: 0;
    //background-color: #ffffff;
    height: ${(props) =>
        props.$isFullSize ? 'calc(var(--vh, 1vh) * 100)' : 'auto'};
    border-radius: ${(props) => (props.$isFullSize ? '0' : '30px 30px 0 0')};
    overflow: ${(props) => (props.$isFullSize ? 'auto' : 'visible')};

    ${mediaQueries.desktop} {
        width: 80vw;
        height: auto;
        border-radius: 30px;
        margin: auto;
        top: 50%;
        bottom: auto;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        overflow: visible;
    }
`;

const HeaderContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #dbdbdb;
    h1 {
        font-weight: bold;
        font-size: 16px;
    }
    button {
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
    }
    img {
        width: 12px;
        height: 12px;
    }
`;

const MobileHeaderContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 20px 40px 20px; */
    border-radius: 30px 30px 0 0;
    box-shadow: 0px 0px 23px -6px #6b6b6b33;
    p {
        font-weight: bold;
        font-size: 16px;
    }
    img {
        width: 12px;
        height: 12px;
    }
`;

const BodyContainer = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 0 15px;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 34px 20px; */
    background-color: #fff;
`;

const Button = styled.button`
    height: 50px;
    width: 100%;
    background-color: #ccc;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border-radius: 50px;
`;

export const ModalStyle = {
    DimmedContainer,
    ModalContainer,
    HeaderContainer,
    MobileHeaderContainer,
    BodyContainer,
    FooterContainer,
    Button,
};
