$(function () {

    // 打开后台页
    $('#open_background').click(e => {
        window.open(chrome.extension.getURL('background.html'));
    });

    // 调用后台JS
    $('#invoke_background_js').click(e => {
        var bg = chrome.extension.getBackgroundPage();
        bg.testBackground();
    });
});
