import { 마을 } from "./마을.js";
import { 마을정보가져오기, 클래스로요소찾기 } from "../src/utils.js";

const { results: 초기마을정보 } = await 마을정보가져오기();

const 요소 = 클래스로요소찾기("townMap");
console.log(요소);
const 첫마을 = new 마을({
  가로길이: 200,
  세로길이: 200,
  상대좌표: { x: 10, y: 10 },
  자식마을: [
    {
      가로길이: 20,
      세로길이: 20,
      상대좌표: { x: 10, y: 10 },
      자식마을: [],
    },
    {
      가로길이: 100,
      세로길이: 100,
      상대좌표: { x: 10, y: 10 },
      자식마을: [],
    },
  ],
});

요소.innerHTML = 첫마을.template();
