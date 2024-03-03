/* vanilla js */
const pop = $('.popup');
const btn = $('.popup > span');
const visual = $('.mainBanner_wrap > img')
let current = 0;
let setIntervalID;
const prev = $('.visual_btn img:first-of-type');
const next = $('.visual_btn img:last-of-type');
const pager = $('.pager li') 

const exhibit = $('.exh > li')
let current2 = 0;
const prev2 = $('.exhibit .title img:first-of-type')
const next2 = $('.exhibit .title img:last-of-type')


$(btn).on('click', function(){
    $(pop).hide(500);
});


// 메인배너 슬라이드 
// 간격 설정+자동실행
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


// <>버튼 조작. 
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


/* ====================================
    ======= 오늘의 전시 슬라이드 ======
==================================== */
exhibit.each((i, o) => {
    $(o).css('left', i * 100 +'%');
});

function slideExh() {
    let prev = exhibit.eq(current2);
    move2(prev, 0, '-100%'); 

    current2++; 
    if (current2 == exhibit.length) {
        current2 = 0;
    };

    let next = exhibit.eq(current2);
    move2(next, '100%', 0);

    if (current2 === 0) {
        $('.exhibit .title h4 a').text("서울");
    };
    if (current2 === 1) {
        $('.exhibit .title h4 a').text("과천");
    };
    if (current2 === 2) {
        $('.exhibit .title h4 a').text("청주");
    };
}

 // 움직이는 함수
 function move2(tg, start, end) {
    tg.css('left', start).stop().animate({left: end}, 500, 'easeOutCubic');
}

let setIntervalID2;
function startTimer2() {
    setIntervalID2 = setInterval(function() {
    slideExh();
}, 10000);
}

$(document).ready(function() {
    startTimer2();
});

$('.exhibit').on({
    mouseenter: function(){
        clearInterval(setIntervalID2)
    },
    mouseleave: function(){
        startTimer2();
    }
})



// <>버튼 조작
next2.on('click', function(){
    let prev = exhibit.eq(current2);
    move2(prev, '0%', '-100%')

    current2++;
    if (current2 == exhibit.length) {
        current2 = 0;
    }

    let next = exhibit.eq(current2); //1 
    move2(next, '100%', '0%')
})

prev2.on('click', function(){
    let prev = exhibit.eq(current2);
    move2(prev, '0%', '100%')

    current2++;
    if (current2 == exhibit.length) {
        current2 = 0;
    }

    let next = exhibit.eq(current2); //1 
    move2(next, '-100%', '0%')
})
