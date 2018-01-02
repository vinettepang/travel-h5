'use strict'
/*辅助函数*/

function v_tools() {
    this._init = function () {
        //this._fixNav('.affix-nav',250);
        this._starRating();
        this._triggerHidden();
        this._progress();
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
    this._starRating = function () {
        let className = '.star-rating';
        let obj = document.querySelectorAll(className);
        
        let star = '<i class="fa fa-star"></i>';
        let starCur = '<i class="fa fa-star cur"></i>';
        let starH = '<i class="fa fa-star-half-o cur"></i>';
        $.each(obj, function(index, o) {
            let val = o.getAttribute("data-num");
            let html = '';
            if (val.indexOf(".")>-1) {
                for (var i = 0; i < parseInt(val); i++) {
                    html+=starCur;
                }
                html+=starH;
                for (var i = 0; i < parseInt(5/val); i++) {
                    html+=star;
                }
            }else{
                for (var i = 0; i < val; i++) {
                    html+=starCur;
                }
                for (var i = 0; i < (5 - parseInt(val)); i++) {
                    html+=star;
                }
            }
            o.innerHTML = html;
        });
    }
    this._triggerHidden = function () {
        let obj = '.trigger-hidden';
        let target = '.list-toggle';

        $(document).on('click',obj, function(event) {
            let _this = $(this);
            let flag = _this.hasClass('t-hidden');
            if (flag) {
                $(target).animate({height:'100%'},500,function() {
                    _this.removeClass('t-hidden');
                });
            }else{
                $(target).animate({height:'3rem'},500,function() {
                    _this.addClass('t-hidden');
                });
            }
        });
    }
    this._progress = function () {
        $.each($('.J_Progress'), function(index, val) {
            //console.log(index,$(this).attr('progessVal'));
            index++;
            let obj = '#J_Progress'+index;
            let progerssVal = $(this).attr('progessVal');
            $(obj).progressBar({
                type: 'circle',
                strokeWidth: 2,
                strokeColor: '#B2B2B2',
                trailWidth: 5,
                trailColor: '#66dc9b',
                fill: '#FFF',
                progress: progerssVal
            });
        });
    }
}
let initFc = new v_tools();
initFc._init();