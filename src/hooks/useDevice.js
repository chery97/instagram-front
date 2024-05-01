import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({
        query: "(max-width:767px)"
    });
    return <>{isMobile && children}</>
}

export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1159px)"
    });
    return <>{isTablet && children}</>
}

export const Pc = ({ children }) => {
    const isPc = useMediaQuery({
        query: "(min-width:1160px)"
    });
    return <>{isPc && children}</>
}

export const mediaQueries = {
    desktop: `@media (min-width:1160px)`,
    tablet: `@media (min-width:768px) and (max-width:1159px)`,
    mobile: `@media (max-width:767px)`,
};