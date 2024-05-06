import React from "react";
import {mediaQueries, Mobile, Pc, Tablet} from '../../hooks/useDevice';
import styled from "styled-components";
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
  width: 244px;
  height: 100vh;
  display: flex;
  background-color: black;
  ${mediaQueries.mobile} {
    font-size: 16px;
  }
  ${mediaQueries.tablet} {
    font-size: 16px;
    width: fit-content;
  }
  ${mediaQueries.desktop} {
    font-size: 16px;
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
    ${mediaQueries.desktop} {
      content: url(${Logo});
    }
    ${mediaQueries.tablet} {
      content: url(${Logo1});
    }
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
  left: 153px;
  position: absolute;
  background-color: black;
  img, span {
    filter: invert(100%);
  }
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

    const openSubLayout = (id) => {
        if (id === "Search") {
            console.log(id)
        }
    }

    return (
        <>
            <NavbarContainer>
                <NavBarLayout>
                    <LogoBox>
                        <LogoInner to={'/'}>
                            <img src={Logo1} alt=''/>
                        </LogoInner>
                    </LogoBox>
                    <MiddleBox>
                        {mainContents.map((contents, index) => (
                            <React.Fragment key={index}>
                                <MiddleInner onClick={() => openSubLayout(contents.id)}>
                                    <Tablet>
                                        <img src={contents.image}  alt=''/>
                                    </Tablet>
                                    <Pc>
                                        <img src={contents.image}  alt=''/>
                                        <MiddleText>
                                            <span>{contents.label}</span>
                                        </MiddleText>
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
                                        <img src={contents.image}  alt=''/>
                                    </Tablet>
                                    <Pc>
                                        <img src={contents.image}  alt=''/>
                                        <BottomText>
                                            <span>{contents.label}</span>
                                        </BottomText>
                                    </Pc>
                                </BottomInner>
                            </React.Fragment>
                        ))}
                    </BottomBox>
                </NavBarLayout>
                {/*<SubLayout>
                    <div>
                        <div>
                            <div>
                                <span>검색</span>
                            </div>
                        </div>
                    </div>
                </SubLayout>
                */}
            </NavbarContainer>
        </>
    );
};

export default Navbar;