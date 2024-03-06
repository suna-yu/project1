//  변수초기화
const loginBtn = document.querySelector('#loginBtn');
const logoutBtn = document.querySelector('#logoutBtn');
let text = $('.main_banner h2');
let textold = text.text();
logoutBtn.css('display', 'none');

// 회원데이터 로컬스토리지 세팅함수
function init() {
    if (!localStorage.getItem('user')) {
        localStorage.setItem('user', JSON.stringify({id: 'test', password: '1234', isLoggedIn: false}));
    };
};

// 로그인 처리함수
function login() {
    let uid = $('#uid').val();
    let upw = $('#upw').val();
    let user = JSON.parse(localStorage.getItem('user'));

    if (uid === user.id && upw === user.password) {
        logoutBtn.css('display', 'block');
        $('#loginBtn').text('logout');
        user.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(user));
    } else {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
    }
}

// 로그아웃 함수
function logout() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.isLoggedIn) {
        user.isLoggedIn = false;
        localStorage.setItem('user', JSON.stringify(user));
        $('.input_group, #loginBtn').css('display', 'block');
		logoutBtn.css('display', 'none');
    }
}

// 로그인아웃 버튼 이벤트함수 
loginBtn.on('click', (e) => {
	e.preventDefault();
	login();
});
logoutBtn.on('click', (e) => {
	e.preventDefault();
	logout();
});

init();