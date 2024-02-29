/* vanilla js */
const pop = document.querySelector('.popup');
const btn = document.querySelector('.popup > span');
const visual = $('.mainBanner_wrap > img')
let current = 0;
let setIntervalID;
const prev = $('.visual_btn img:first-of-type');
const next = $('.visual_btn img:last-of-type');
const pager = $('.pager li') 

$(btn).on('click', function(){
    $(pop).hide(500);
});

// function time() {
//     let day = new Date(); // 인스턴스함수. 내장함수. Date는 new랑 같이 써야 함. 
//     let now = day.toLocaleTimeString();
//     document.querySelector('#time').innerHTML = now;
// }
// setInterval(time, 1000);

// 메인배너 슬라이드 
function timer() {
    setIntervalID = setInterval(() => {
        slideFn();
    }, 5000);
}
$(document).ready(function() {
    timer();
});

function slideFn() {
    let prev = visual.eq(current);
    let prevPage = pager.eq(current); // pager
    move(prev, '0%', '-100%');
    prevPage.removeClass('on');// pager

    current++;
    if (current == visual.length) {
        current = 0;
    };

    let next = visual.eq(current); //1 
    let nextPage = pager.eq(current);  // pager
    move(next, '100%', '0%');
    nextPage.addClass('on'); // pager
}

 // 움직이는 함수
 function move(tg, start, end) {
    tg.css('left', start).stop().animate({left: end}, 500, 'easeOutCubic');
}

// 정지, 실행하기
$('.mainBanner_wrap').on({
    mouseenter: function(){
        clearInterval(setIntervalID)
    },
    mouseleave: function(){
        timer();
    }
})

// <>버튼 조작. 아직 버튼이 없다... 
next.on('click', function(){
    let prev = visual.eq(current);
    let prevPage = pager.eq(current); //페이저
    move(prev, '0%', '-100%')
    prevPage.removeClass('on'); // pager

    current++;
    if (current == visual.length) {
        current = 0;
    }

    let next = visual.eq(current); //1 
    let nextPage = pager.eq(current); // pager
    move(next, '100%', '0%')
    nextPage.addClass('on'); // pager
})
prev.on('click', function(){
    let prev = visual.eq(current);
    let prevPage = pager.eq(current); // pager
    move(prev, '0%', '100%')
    prevPage.removeClass('on'); // pager

    current++;
    if (current == visual.length) {
        current = 0;
    }

    let next = visual.eq(current); //1 
    let nextPage = pager.eq(current); // pager
    move(next, '-100%', '0%')
    nextPage.addClass('on'); // pager
})

// pager 버튼
pager.on('click', function(){
    const i = $(this).index(); // $(this)로 선택한 거 갖고오기 / index() 인덱스번호 얻어오기 
    pager.removeClass('on'); // 모두 불끄기 
    $(this).addClass('on'); // 선택한 것만 불키기
    pagerMove(i);
});
function pagerMove(i){
    let currentEl = visual.eq(current); //0
    let nextEl = visual.eq(i); // 클릭한 pager의 index번호
    currentEl.css({left: 0}).stop().animate({left: '-100%'}, 500);
    nextEl.css({left: '100%'}).stop().animate({left: 0}, 500);
    current = i;
};