function qido() {
    var ss = document.documentElement.clientWidth;
    aa = ss / 320;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = aa * 10 + 'px';
}
window.onload = function () {
    qido();
}
window.onresize = function () {
    qido();
}
