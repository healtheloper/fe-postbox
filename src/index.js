import { 마을 } from "./마을.js";
import { 마을정보가져오기, 클래스로요소찾기 } from "../src/utils.js";

const { results: 초기마을정보 } = await 마을정보가져오기();

const 요소 = 클래스로요소찾기("townMap");
console.log(요소);
const 첫마을 = new 마을({ 가로길이: 50, 세로길이: 50, 좌표: { x: 10, y: 10 } });

요소.appendChild(첫마을);
// console.log(a);
