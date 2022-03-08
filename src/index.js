import { 마을 } from "./마을.js";
import { 마을정보가져오기 } from "../src/utils.js";

const { results: 초기마을정보 } = await 마을정보가져오기();

const dfs = (시작점, 클래스) => {
  const 자식노드들 = [...시작점.children];
  const 찾은노드 = 자식노드들.find((자식노드) => {
    if (자식노드.classList.contains(클래스)) {
      return true;
    } else {
      return dfs(자식노드, 클래스);
    }
  });
  return 찾은노드;
};
const 클래스로요소찾기 = (클래스) => {
  const 요소 = dfs(document.body, 클래스);
};

클래스로요소찾기("townMap");
// const a = new 마을({ 가로길이: 50, 세로길이: 50, 좌표: { x: 10, y: 10 } });

// console.log(a);
