const {
  getRandomTownCount,
  getRandomSize,
  getRandomHasBox,
} = require("./utils.js");

const 시작가로길이 = 700;
const 시작세로길이 = 800;
const 우체통최대크기 = 10;

Array(getRandomTownCount())
  .fill(0)
  .forEach((v, i, origin) => {
    const 가로길이 = getRandomSize(시작가로길이, origin.length);
    const 세로길이 = getRandomSize(시작세로길이, origin.length);
    //const position = {x:,y:}
    const 우체통존재여부 = getRandomHasBox();
    const 우체통크기 = getRandomSize(우체통최대크기);
  });
