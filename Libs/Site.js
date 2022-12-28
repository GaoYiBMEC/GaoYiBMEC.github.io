$(function () {
    reportWindowSize();
});

const reportWindowSize = function () {
    reportwindowScroll();
};

const reportwindowScroll = function () {
    //bkWhite
    const _header = document.getElementById('header');
    const _headerTitle = document.getElementById('headerTitle');
    if (_header != null && _headerTitle != null) {
        const _headerRect = _header.getBoundingClientRect();
        const _headerTitleRect = _headerTitle.getBoundingClientRect();

        if (_headerRect.bottom < _headerTitleRect.top) {
            $('#headerTitle').addClass('bkWhite');
        } else {
            $('#headerTitle').removeClass('bkWhite');
        };
    };
};

window.onresize = reportWindowSize;
window.onscroll = reportwindowScroll;