import styled from 'styled-components';

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
    z-index: 12;
    position: fixed;
    width: 100vw;
    bottom: 0;
    background-color: #fff;
    height: ${(props) =>
        props.$isFullSize ? 'calc(var(--vh, 1vh) * 100)' : 'auto'};
    border-radius: ${(props) => (props.$isFullSize ? '0' : '30px 30px 0 0')};
    overflow: ${(props) => (props.$isFullSize ? 'auto' : 'visible')};

    /* ${mediaQueries.desktop} {
        width: 600px;
        height: auto;
        border-radius: 30px;
        margin: auto;
        top: 50%;
        bottom: auto;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        overflow: visible;
    } */
`;

const HeaderContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px 30px;
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

    /* ${mediaQueries.desktop} {
        padding: 40px 40px 30px;
        p {
            ${fontSize(24)}
        }
        img {
            width: 20px;
            height: 20px;
        }
    } */
`;

const MobileHeaderContainer = styled.div`
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px 20px;
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
    padding: 0 20px;

    /* ${mediaQueries.desktop} {
        padding: 0 40px;
    } */
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 34px 20px;
    background-color: #fff;

    /* ${mediaQueries.desktop} {
        padding: 34px 40px;
        border-radius: 0 0 30px 30px;
    } */
`;

const Button = styled.button`
    height: 50px;
    width: 100%;
    background-color: #ccc;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border-radius: 50px;

    /* ${mediaQueries.desktop} {
        height: 60px;
        ${fontSize(18)}
    } */
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
