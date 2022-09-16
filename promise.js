const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  let count = 0;
  promiseTheaterIXX()
    .then((result) => {
      result.map((values) => {
        if (values.hasil == emosi) count += 1;
      });
      return promiseTheaterVGC();
    })
    .then((result) => {
      result.map((values) => {
        if (values.hasil == emosi) count += 1;
      });
      console.log(count)
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = {
  promiseOutput,
};
