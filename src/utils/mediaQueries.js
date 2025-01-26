// breakpoints.ts
export const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 980,
    MAIN_CONTENT_MAX_WIDTH: 1920,
    CONTENT_MAX_WIDTH: 1400,
};

export const isMobile = (width = window.innerWidth) =>
    width <= BREAKPOINTS.MOBILE;

export const isTablet = (width = window.innerWidth) =>
    width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET;

export const isDesktop = (width = window.innerWidth) =>
    width > BREAKPOINTS.TABLET;

export const mediaQueries = {
    desktop: `@media (min-width: ${BREAKPOINTS.TABLET}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px)`,
    mobile: `@media (max-width: ${BREAKPOINTS.MOBILE}px)`,
    mainContentMaxWidth: `@media screen and (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.MAIN_CONTENT_MAX_WIDTH}px)`,
    contentMaxWidth: `@media screen and (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.CONTENT_MAX_WIDTH}px)`,
};
