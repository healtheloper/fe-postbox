const 마을정보가져오기 = async () => {
  const res = await fetch("http://127.0.0.1:3000/town");
  return res.json();
};

export { 마을정보가져오기 };
