import React, { useEffect } from 'react';
import { useWindowSize } from 'usehooks-ts';

import { isMobile } from '../../utils/mediaQueries';
import { ModalStyle as S } from './index.styled';
import Portal from '../Modal/Portal/index';

const Dimmed = ({ children, dimmedLevel, onClose, ...props }) => {
    return (
        <S.DimmedContainer
            onClick={onClose}
            {...props}
            style={{ zIndex: dimmedLevel }}
        >
            {children}
        </S.DimmedContainer>
    );
};

const Header = ({ title, onClose, headerStyle }) => {
    const isMobileSize = isMobile();

    return (
        <S.HeaderContainer style={headerStyle}>
            <h1>{title}</h1>
            <button>
                <img
                    src={isMobileSize ? 'PC' : 'MO'}
                    alt='close'
                    onClick={onClose}
                />
            </button>
        </S.HeaderContainer>
    );
};

const MobileHeader = ({ isOpen, onClick }) => {
    return (
        <S.MobileHeaderContainer>
            <button
                type='button'
                onClick={(e) => {
                    e.stopPropagation();
                    onClick();
                }}
            >
                <img src={isOpen ? 'ArrowDown' : 'ArrowUp'} />
            </button>
        </S.MobileHeaderContainer>
    );
};

const Body = ({ children, bodyStyle }) => {
    return <S.BodyContainer style={bodyStyle}>{children}</S.BodyContainer>;
};

const Footer = ({ buttonName, onClick, type, children, footerStyle }) => {
    return (
        <S.FooterContainer style={footerStyle}>
            {buttonName ? (
                <S.Button type={type ? type : 'button'} onClick={onClick}>
                    {buttonName}
                </S.Button>
            ) : null}
            {children}
        </S.FooterContainer>
    );
};

const Main = ({
    children,
    isOpen,
    isFullSize,
    dimmedLevel = 12,
    isLocked = true,
    onClose,
}) => {
    const { height } = useWindowSize();

    const handleResize = () => {
        const vh = height * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [height]);

    return isOpen ? (
        <Portal selector='modal-root'>
            {isLocked && (
                <Dimmed
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    dimmedLevel={dimmedLevel}
                />
            )}
            <S.ModalContainer $isFullSize={isFullSize}>
                {children}
            </S.ModalContainer>
        </Portal>
    ) : null;
};

export const Modal = Object.assign(Main, {
    MobileHeader,
    Header,
    Body,
    Footer,
});
