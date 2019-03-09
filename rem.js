(function () {
    // 按照设计稿是750px来计算，刚刚刚
    function computed() {
        let w = 750;
        let winW = document.documentElement.clientWidth;
        document.documentElement.style.fontSize= winW*100/750+"px";
    }
    computed();
    window.addEventListener("resize",computed)
})();