const {
  마을개수랜덤생성,
  크기랜덤생성,
  우체통존재여부랜덤생성,
  좌표랜덤생성,
} = require("./utils.js");

const 시작가로길이 = 700;
const 시작세로길이 = 800;
const 우체통최대크기 = 10;
const 사분면 = [
  [0, 0],
  [시작가로길이 / 2, 0],
  [0, 시작세로길이 / 2],
  [시작가로길이 / 2, 시작세로길이 / 2],
];

const 데이터얻기 = () => {
  const results = [];
  Array(마을개수랜덤생성())
    .fill(0)
    .forEach((v, i, origin) => {
      const [x, y] = 사분면[i];
      const 베이스좌표 = { x, y };
      const 가로길이 = 크기랜덤생성(시작가로길이, 사분면.length);
      const 세로길이 = 크기랜덤생성(시작세로길이, 사분면.length);
      const 상대좌표 = 좌표랜덤생성(
        베이스좌표,
        가로길이,
        세로길이,
        시작가로길이,
        시작세로길이
      );
      const 우체통존재여부 = 우체통존재여부랜덤생성();
      const 우체통크기 = 크기랜덤생성(우체통최대크기);
      const 자식마을 = [];
      results.push({
        가로길이,
        세로길이,
        우체통존재여부,
        상대좌표,
        우체통크기,
        자식마을,
      });
    });
  return { results };
};

module.exports = { 데이터얻기 };
