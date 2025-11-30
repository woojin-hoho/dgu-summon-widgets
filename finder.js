// 동국대 Summon용 테스트 위젯
(function () {
  console.log("DGU Summon finder.js loaded");

  // 패널 안에 간단한 메시지 하나 넣어보기
  var box = document.createElement("div");
  box.style.border = "1px solid #ccc";
  box.style.padding = "8px";
  box.style.margin = "8px 0";
  box.style.background = "#f9f9f9";
  box.textContent = "동국대 Summon finder.js 테스트 위젯입니다.";

  // Summon 우측 패널 영역이 있으면 거기에, 없으면 body 맨 아래에 붙이기
  var target =
    document.querySelector(".rightSidePanel") ||
    document.querySelector("#dgufinder") ||
    document.body;

  target.appendChild(box);
})();
