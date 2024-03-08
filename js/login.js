//  변수초기화
const loginBtn = $('#loginBtn');
const logoutBtn = $('#logoutBtn');
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
        alert('로그인 되셨습니다.');
        $('.login_wrap form').css('display', 'none')
		loginBtn.css('display', 'none');
		logoutBtn.css('display', 'flex');
		$('#login').text('로그아웃');
		$('.signIn').text('<a href="./login.html">멤버십</a>');
		$('.login_wrap h3').text(`${uid}님 환영합니다.`);
        $('.idSave').css('display', 'none');
        $('.login_wrap').addClass('on');

		user.isLoggedIn = true;
		localStorage.setItem('user', JSON.stringify(user));

        $('#login').on('click', (e) => {
            e.preventDefault();
            logout();
        });
    } else {
        alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
    }
}

// 로그아웃 함수
function logout() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user.isLoggedIn) {
        alert('로그아웃 되셨습니다.');
		user.isLoggedIn = false;
		localStorage.setItem('user', JSON.stringify(user));
        
        $('.login_wrap form').css('display', 'block')
		loginBtn.css('display', 'flex');
		logoutBtn.css('display', 'none');
		$('#login').text('로그인');
		$('.signIn').text('회원가입');
		$('.login_wrap h3').text('로그인');
        $('.idSave').css('display', 'block');
        $('.login_wrap').removeClass('on');
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