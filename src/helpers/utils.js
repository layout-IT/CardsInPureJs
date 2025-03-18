export const getImageUrlByScreenSize = (desktopUrl, tabletUrl, mobileUrl) => {
    const width = window.innerWidth;
    if (width >= 1024) {
        return desktopUrl;
    } else if (width >= 768) {
        return tabletUrl;
    } else {
        return mobileUrl;
    }
};
