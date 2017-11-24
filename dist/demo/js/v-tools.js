'use strict'
function v_tools() {
    this._init = function () {
        this._fixNav('.affix-nav',250);
    }
    this._fixNav = function (target,topH) {
        window.onscroll=function(){
            let topScroll =document.body.scrollTop;
            let t  =  document.querySelector(target);
             if(topScroll > topH){
                 t.style.position = 'fixed';
                t.style.top = '0';
                t.style.width = '100%';
                t.style.zIndex = '99999';
            }else{
                t.style.position = 'static';
             }
         }
    }
}
let initFc = new v_tools();
initFc._init();