console.log('这是content script!');

document.addEventListener('DOMContentLoaded', function () {
    window.testplugin = true;
    injectCustomJs();
});


window.addEventListener("message", function (e) {
    console.log('收到消息：', e.data);

    $.get(e.data.url, function (html) {
        console.log(e.data);
        $("#" + e.data.dom).text(html)
    });

}, false);


// 向页面注入JS
function injectCustomJs(jsPath) {
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);
    document.body.appendChild(temp);
}