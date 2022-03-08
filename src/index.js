import { 마을 } from "./마을.js";
import { 마을정보가져오기, 클래스로요소찾기 } from "../src/utils.js";

const { results: 초기마을정보 } = await 마을정보가져오기();

const 요소 = 클래스로요소찾기("townMap");
console.log(초기마을정보);
let template = "";
초기마을정보.forEach((마을정보) => {
  template += new 마을(마을정보).template();
});

요소.innerHTML = template;
