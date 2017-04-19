var resetFs= {
    timeoutId:"null",
    performProcessing:function(){
        var ss = document.documentElement.clientWidth;
        var aa = ss / 320;
        var html = document.getElementsByTagName('html')[0];
        html.style.fontSize = aa * 10 + 'px';
    },
    process:function(){
        clearTimeout(this.timeoutId);
        this.timeoutId=setTimeout(function(){
            resetFs.performProcessing();
        },100)
    }
}
window.onload = function () {
    resetFs.performProcessing()
}
window.onresize = function () {
    resetFs.process()
}
