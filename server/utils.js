const 마을개수랜덤생성 = () => {
  const 최대갯수 = 4;
  const 최소갯수 = 2;

  return Math.floor(Math.random() * (최대갯수 - 최소갯수) + 최소갯수);
};

const 크기랜덤생성 = (최대크기, 나눌수 = 1) => {
  return Math.floor(Math.random() * (최대크기 / 나눌수)) + 1;
};

const 우체통존재여부랜덤생성 = () => {
  return Math.floor(Math.random() * 1) === 1 ? true : false;
};

const 좌표랜덤생성 = (
  베이스좌표,
  가로길이,
  세로길이,
  시작가로길이,
  시작세로길이
) => {
  const { x, y } = 베이스좌표;
  const randX = Math.floor(Math.random() * (시작가로길이 / 2 - 가로길이)) + x;
  const randY = Math.floor(Math.random() * (시작세로길이 / 2 - 세로길이)) + y;
  console.log(x);
  console.log("randX", Math.random() * (시작가로길이 / 2 - 가로길이));
  return {
    x: randX,
    y: randY,
  };
};

module.exports = {
  마을개수랜덤생성,
  크기랜덤생성,
  우체통존재여부랜덤생성,
  좌표랜덤생성,
};
