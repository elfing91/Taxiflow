Kakao.Auth.login({
  success: function (authObj) {
    console.log("로그인 성공:", authObj);
    Kakao.API.request({
      url: "/v2/user/me", // 사용자 정보 요청
      success: function (res) {
        console.log("사용자 정보:", res); // 사용자 ID, 이메일, 닉네임 확인
        alert(`${res.kakao_account.profile.nickname}님 환영합니다!`);
      },
      fail: function (err) {
        console.error("사용자 정보 요청 실패:", err);
      },
    });
  },
  fail: function (err) {
    console.error("로그인 실패:", err);
  },
});
