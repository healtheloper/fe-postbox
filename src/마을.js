import { 우체통 } from "./우체통.js";

export class 마을 {
  constructor({ 가로길이, 세로길이, 좌표: { x, y }, 자식마을 }) {
    this.가로길이 = 가로길이;
    this.세로길이 = 세로길이;
    this.좌표 = { x, y };
    this.우체통 = new 우체통();
    this.자식마을 = 자식마을.map((마을정보) => new 마을(마을정보));
  }
}
