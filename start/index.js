// SDK 초기화
Kakao.init("c1a5912d2f8879e9c648b5cc592d01c5"); // "JavaScript 키"를 여기에 입력
console.log(Kakao.isInitialized()); // true가 나오면 성공!

// 카카오 로그인 버튼 클릭 이벤트
document
  .getElementById("kakao-login-btn")
  .addEventListener("click", function () {
    // 카카오 로그인 요청
    Kakao.Auth.login({
      success: function (authObj) {
        console.log("로그인 성공:", authObj); // 인증 토큰 확인

        // 로그인 후 사용자 정보 요청
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            console.log("사용자 정보:", res);
            alert(`${res.kakao_account.profile.nickname}님 환영합니다!`);
            // 로그인 성공 후 home/index.html로 리디렉션
            window.location.href = "http://127.0.0.1:5500/home/index.html";
          },
          fail: function (err) {
            console.error("사용자 정보 요청 실패:", err);
          },
        });
      },
      fail: function (err) {
        console.error("로그인 실패:", err); // 로그인 실패 시 오류 메시지 출력
      },
    });
  });
