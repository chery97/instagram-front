import { ProfileStyled as S } from "./index.styled";
import Navbar from "../../components/navbar";
import React from "react";
import { Link } from "react-router-dom";
import Article from "../../asset/icons/profile/article.svg";
import Reels from "../../asset/icons/profile/reels.svg";
import Tagged from "../../asset/icons/profile/tagged.svg";

const ProfileView = () => {
    const tabCont = [
        { id: "Article", label: "게시물", image: {Article} },
        { id: "Reels", label: "릴스", image: {Reels} },
        { id: "Tagged", label: "태그됨", image: {Tagged} },
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
                                <S.FeedTabCont to={'/profile/:id'}>
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