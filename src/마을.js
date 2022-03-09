import { 우체통 } from "./우체통.js";

export class 마을 {
  constructor({ 가로길이, 세로길이, 상대좌표: { x, y }, 자식마을 }) {
    this.가로길이 = 가로길이;
    this.세로길이 = 세로길이;
    this.상대좌표 = { x, y };
    this.우체통 = new 우체통();
    this.자식마을 = 자식마을?.length
      ? 자식마을.map((마을정보) => new 마을(마을정보))
      : [];
  }
  template() {
    return `<div class="town" style="width:${this.가로길이}px; height:${
      this.세로길이
    }px; top:${this.상대좌표.y}px; left:${this.상대좌표.x}px">${
      this.우체통 ? this.우체통.template() : ""
    }${
      this.자식마을.length
        ? this.자식마을.map((자식) => 자식.template()).join("")
        : ""
    }</div>`;
  }
}
