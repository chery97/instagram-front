import styled from 'styled-components';
import {Link} from "react-router-dom";

const Main = styled.main``;

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Contents = styled.div`
    width: 100%;
`;

const ProfileContents = styled.div`
    width: calc(100% - 40px);
    max-width: 935px;
    flex-grow: 1;
    padding: 30px 20px 0 20px;
    margin: 0 auto 30px auto;
`;

const FeedTab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-color: rgb(38, 38, 38);
    border-top-width: 1px;
    border-top-style: solid;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
`;

const FeedTabCont = styled(Link)`
    display: flex;
    align-items: center;
    margin: -1px 60px 0 0;
    height: 52px;
    color: #A8A8A8;
    &:last-child {
        margin: 0;
    }

    img {
        width: 12px;
        height: 12px;
    }
    
    span {
        margin-left: 6px;
    }
`;

export const ProfileStyled = {
    Main,
    Inner,
    Contents,
    ProfileContents,
    FeedTab,
    FeedTabCont
};