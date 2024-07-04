import React, {useEffect, useRef, useState} from "react";
import {mediaQueries, Mobile, Pc, Tablet} from '../../hooks/useDevice';
import styled, {css, keyframes} from "styled-components";
import Logo from "../../asset/icons/nav-bar-logo.svg";
import Logo1 from "../../asset/icons/nav-bar-logo-1.svg";
import Home from "../../asset/icons/nav-bar-home.svg";
import Compass from "../../asset/icons/nav-bar-compass.svg";
import Alert from "../../asset/icons/nav-bar-alert.svg";
import Create from "../../asset/icons/nav-bar-create.svg";
import Message from "../../asset/icons/nav-bar-message.svg";
import Reels from "../../asset/icons/nav-bar-reels.svg";
import Search from "../../asset/icons/nav-bar-search.svg";
import Threads from "../../asset/icons/nav-bar-threads.svg";
import More from "../../asset/icons/nav-bar-more.svg";
import {Link} from "react-router-dom";

const NavbarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-shrink: 0;
    width: 244px;
    height: 100vh;
    background-color: black;
    ${mediaQueries.mobile} {
    font-size: 16px;
    z-index: 1;
  }
  ${mediaQueries.tablet} {
    font-size: 16px;
    width: fit-content;
      z-index: 1;
  }
  ${mediaQueries.desktop} {
    font-size: 16px;
      z-index: 1;
  }
`;

const NavBarLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 20px 12px;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 92px;
`;

const LogoInner = styled(Link)`
  width: 100%;
  height: 73px;
  padding: 25px 12px 16px;
  margin: 0 0 19px;
  display: flex;
  img {
    filter: invert(100%);
  }
`;

const MiddleBox = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const MiddleInner = styled.div`
  width: 100%;
  padding: 12px;
  margin: 4px 0;
  display: flex;
  cursor: pointer;
  img, span {
    filter: invert(100%);
  }
  &:hover {
    background-color: rgba(255, 255, 255, .1);
    border-radius: 10px;
    transition: 0.3s;
  }
`;

const MiddleText = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

const BottomBox = styled.div`
  width: 100%;
  margin: 4px 0;
  cursor: pointer;
  img, span {
    filter: invert(100%);
  }
`;

const BottomInner = styled.div`
  width: 100%;
  padding: 12px;
  margin: 4px 0;
  display: flex;
  cursor: pointer;

  img, span {
    filter: invert(100%);
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, .1);
    border-radius: 10px;
    transition: 0.3s;
  }
`;

const BottomText = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

const SubLayout = styled.div`
  width: 397px;
  height: 100vh;
  bottom: 0;
  left: -430px;
  position: absolute;
  background-color: black;
    transition: 0.5s ease;  
    &.open {
        left: 80px;
        transition: 0.5s ease;
    }
  animation: ${() => slideInAnimation} 0.3s ease-in-out forwards;
  z-index: 2;
  img, span {
    filter: invert(100%);
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-20%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SubLayoutInner = styled.div`
  padding: 8px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SubLayoutTop = styled.div`
  padding: 12px 14px 36px 24px;
  margin: 8px 0;
  div {
    text-align: left;
    font-size: 28px;
    font-weight: 600;
    max-width: 100%;
  }
`;

const SubLayoutBottom = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SubLayoutSearchBox = styled.div`
  margin: 0 16px;
  max-width: 100%;
  input {
    color: rgb(38, 38, 38);
  }
`;

const SubLayoutSearchBoxInner = styled.div`
  margin-bottom: 24px;
  height: 40px;
  min-width: 125px;
  background-color: #262626;
  border-radius: 8px;
  padding: 0 16px;
  cursor: text;
`;

const SearchBoxCont = styled.div`
  color: #A8A8A8;
  font-size: 16px;
  display: flex;
  height: 100%;
  align-items: center;
  img {
    width: 16px;
  }
`;

const SearchBoxInputCont = styled.div`
  color: #A8A8A8;
  font-size: 16px;
  display: flex;
  height: 100%;
  align-items: center;
  input {
    color: #A8A8A8;
    font-size: 16px;
    height: 100%;
    width: 100%;
  }
`;

const SearchBoxContDeleteBtn = styled.div`
  background-repeat: no-repeat;
  background-position: -318px -333px;
  height: 20px;
  width: 20px;
  background-image: url("https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png");
`;

const Divide = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(38, 38, 38);
`;

const ResultBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
`;

const ResultBoxTitle = styled.div`
  width: 100%;
  max-width: 348px;
  display: flex;
  margin: 6px 24px 8px 24px;
  padding-top: 4px;
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 800;
`;

const Navbar = () => {
    const mainContents = [
        {'id': 'Home', 'label': '홈', 'image': {Home}},
        {'id': 'Search', 'label': '검색', 'image': {Search}},
        {'id': 'Compass', 'label': '탐색 탭', 'image': {Compass}},
        {'id': 'Reels', 'label': '릴스', 'image': {Reels}},
        {'id': 'Message', 'label': '메시지', 'image': {Message}},
        {'id': 'Alert', 'label': '알림', 'image': {Alert}},
        {'id': 'Create', 'label': '만들기', 'image': {Create}},
        {'id': 'Profile', 'label': '프로필', 'image': {}},
        ]
    mainContents.map((contents) => {
        const id = contents.id;
        contents.image = contents.image[id];
    })

    const bottomContents = [
        {'id': 'Threads', 'label': 'Threads', 'image': {Threads}},
        {'id': 'More', 'label': '더 보기', 'image': {More}},
    ];
    bottomContents.map((contents) => {
        const id = contents.id;
        contents.image = contents.image[id];
    })

    const [isSubLayoutVisible,setIsSubLayoutVisible] = useState('');
    const [isSubLayoutOpened,setIsSubLayoutOpened] = useState(false);
    const [isInputType,setIsInputType] = useState(false);

    const slideIn = (id) => {
        if (id === 'Search') {
            if (!isSubLayoutOpened) {
                setIsSubLayoutVisible(id);
                setIsSubLayoutOpened(true);
            } else {
                setIsSubLayoutVisible('');
                setIsSubLayoutOpened(false);
            }
        } else {
            setIsSubLayoutVisible('');
            setIsSubLayoutOpened(false);
        }
    }

    // const element = useRef(null);
    // const useSlideIn = () => {
    //     useEffect(() => {
    //         const clickFocus = (e) => {
    //             // 검색창 요소 이외의 영역 클릭 시 검색창 비노출 되도록 value 빈 값으로 셋팅
    //             if (element.current && !element.current.contains(e.target)) {
    //                 setIsSubLayoutVisible('');
    //             }
    //         }
    //         // 이벤트 리스너에 clickFocus 함수 등록
    //         document.addEventListener("mouseup", clickFocus);
    //
    //         return () => {
    //             // 끝나면 리스너 삭제
    //             document.removeEventListener("mouseup", clickFocus);
    //         }
    //     }, [isSubLayoutVisible]);
    //     return { ref: element, style: { opacity: 1 } };
    // }
    // const openSubLayout = useSlideIn();

    return (
        <>
            <NavbarContainer style={{
                width: isSubLayoutVisible === 'Search' ? 'fit-content' : null
            }}>
                <NavBarLayout>
                    <LogoBox>
                        <LogoInner to={'/'}>
                            <Pc>
                                <img src={
                                    isSubLayoutVisible !== 'Search' ?
                                        Logo : Logo1
                                } alt=''/>
                            </Pc>
                            <Tablet>
                                <img src={
                                    isSubLayoutVisible !== 'Search'
                                        ?
                                        Logo1
                                        :
                                        Logo1
                                } alt=''/>
                            </Tablet>
                        </LogoInner>
                    </LogoBox>
                    <MiddleBox>
                        {mainContents.map((contents, index) => (
                            <React.Fragment key={index}>
                                <MiddleInner onClick={() => slideIn(contents.id)}>
                                    <Tablet>
                                        <img src={contents.image}  alt=''/>
                                    </Tablet>
                                    <Pc>
                                        <img src={contents.image}  alt=''/>
                                        {isSubLayoutVisible !== 'Search'
                                            ?
                                            <MiddleText>
                                                <span>{contents.label}</span>
                                            </MiddleText>
                                            : null
                                        }
                                    </Pc>
                                </MiddleInner>
                            </React.Fragment>
                        ))}
                    </MiddleBox>
                    <BottomBox>
                        {bottomContents.map((contents, index) => (
                            <React.Fragment key={index}>
                                <BottomInner>
                                    <Tablet>
                                        <img src={contents.image} alt=''/>
                                    </Tablet>
                                    <Pc>
                                        <img src={contents.image} alt=''/>
                                        {isSubLayoutVisible !== 'Search'
                                            ?
                                                <BottomText>
                                                    <span>{contents.label}</span>
                                                </BottomText>
                                            : null
                                        }
                                    </Pc>
                                </BottomInner>
                            </React.Fragment>
                        ))}
                    </BottomBox>
                </NavBarLayout>
                <SubLayout className={
                    `${isSubLayoutOpened 
                        ? 
                        'open' 
                        : 
                        ''}
                    `}
                >
                    <SubLayoutInner>
                        <SubLayoutTop>
                            <div>
                                <span>검색</span>
                            </div>
                        </SubLayoutTop>
                        <SubLayoutBottom>
                            <SubLayoutSearchBox>
                                <SubLayoutSearchBoxInner>
                                    {!isInputType
                                        ?
                                        <SearchBoxCont onClick={() => setIsInputType(true)}>
                                            <img src={Search} alt=''/>
                                            <span>검색</span>
                                        </SearchBoxCont>
                                        :
                                        <SearchBoxInputCont>
                                            <input type='text' placeholder='검색' />
                                            <SearchBoxContDeleteBtn />
                                        </SearchBoxInputCont>
                                    }
                                </SubLayoutSearchBoxInner>
                            </SubLayoutSearchBox>
                            <Divide />
                            <ResultBox>
                                <ResultBoxTitle>최근 검색 항목</ResultBoxTitle>
                            </ResultBox>
                        </SubLayoutBottom>
                    </SubLayoutInner>
                </SubLayout>
            </NavbarContainer>
        </>
    );
};

export default Navbar;