import { ProfileStyled as S } from "./index.styled";
import Navbar from "../../components/navbar";
import React from "react";
import {Link, Outlet, useParams} from "react-router-dom";
import article from "../../asset/icons/profile/article.svg";
import reels from "../../asset/icons/profile/reels.svg";
import tagged from "../../asset/icons/profile/tagged.svg";

const ProfileView = () => {
    const params = useParams();
    const tabCont = [
        { id: "article", label: "게시물", image: {article} },
        { id: "reels", label: "릴스", image: {reels} },
        { id: "tagged", label: "태그됨", image: {tagged} },
    ];
    tabCont.map((contents) => {
        const id = contents.id;
        contents.image = contents.image[id];
    })

    return (
        <S.Main>
            <S.Inner>
                <Navbar />
                <S.Contents>
                    <S.ProfileContents>
                        {/* joy님 해주세요 */}
                        <S.FeedTab>
                            {tabCont.map((contents) => (
                                <S.FeedTabCont to={
                                    contents.id === 'article'
                                    ?
                                    `/profile/${params.memId}`
                                    :
                                    `/profile/${params.memId}/${contents.id}`
                                } key={contents.id}>
                                    <img src={contents.image}/>
                                    <span>{contents.label}</span>
                                </S.FeedTabCont>
                            ))}
                        </S.FeedTab>
                    </S.ProfileContents>
                </S.Contents>
            </S.Inner>
        </S.Main>
    )
}

export default ProfileView;