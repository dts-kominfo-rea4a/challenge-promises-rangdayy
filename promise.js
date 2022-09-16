const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let count = 0;

  const ixx = await promiseTheaterIXX();
  ixx.map((values) => {
    if (values.hasil == emosi) count += 1;
  });
  
  const vgc = await promiseTheaterVGC();
  vgc.map((values) => {
    if (values.hasil == emosi) count += 1;
  });

  return count;
};
module.exports = {
  promiseOutput,
};
