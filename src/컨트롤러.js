import { 클래스로요소찾기, 딜레이 } from "./utils.js";

const 마을정보출력 = () => {};

const 우체통마을색상변경 = (시작점) => {
  const 자식노드들 = [...시작점.children];
  const 찾은노드들 = 자식노드들.filter((자식노드) =>
    자식노드.classList.contains("hasBox")
  );
  if (찾은노드들.length) {
    찾은노드들.forEach((찾은노드) => {
      찾은노드.style.border = "1px solid #f00";
    });
  }
  자식노드들.forEach((자식노드) => 우체통마을색상변경(자식노드, "hasBox"));
};

const 컨트롤러 = () => {
  const 버튼 = 클래스로요소찾기("checkBtn");
  버튼.addEventListener("click", async () => {
    마을정보출력();
    await 딜레이(2000);
    우체통마을색상변경(클래스로요소찾기("townMap"));
  });
};

export default 컨트롤러;
