const 마을개수랜덤생성 = () => {
  const MAXIMUM = 4;
  const MINIMUM = 2;

  return Math.floor(Math.random() * (MAXIMUM - MINIMUM) + MINIMUM);
};

const 크기랜덤생성 = (최대크기, count = 1) => {
  return Math.floor(Math.random() * (최대크기 / count)) + 1;
};

const 우체통존재여부랜덤생성 = () => {
  return Math.floor(Math.random() * 1) === 1 ? true : false;
};

module.exports = { 마을개수랜덤생성, 크기랜덤생성, 우체통존재여부랜덤생성 };
