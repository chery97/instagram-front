const BREAKPOINTS = {
    MOBILE: 768,
    TABLET: 980,
    MAIN_CONTENT_MAX_WIDTH: 1920,
    CONTENT_MAX_WIDTH: 1400,
};

const isMobile = (width) => width <= BREAKPOINTS.TABLET;
const isTablet = (width) =>
    width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET;
const isDesktop = (width) => width > BREAKPOINTS.TABLET;

export { isMobile, isTablet, isDesktop };

export const mediaQueries = {
    desktop: `@media (min-width: ${BREAKPOINTS.TABLET}px)`,
    tablet: `@media (min-width: ${BREAKPOINTS.MOBILE}px)`,
    mobile: `@media (max-width: ${BREAKPOINTS.MOBILE}px)`,
    mainContentMaxWidth: `@media screen and (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.MAIN_CONTENT_MAX_WIDTH}px)`,
    contentMaxWidth: `@media screen and (min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.CONTENT_MAX_WIDTH}px)`,
};
