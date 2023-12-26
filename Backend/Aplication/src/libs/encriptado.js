const bcrypt = require("bcryptjs");

const toHash = (plaintext) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plaintext, salt);
};
 const compareHash = (plaintext, hashtext) => {
  return bcrypt.compareSync(plaintext, hashtext);
};

module.exports = { toHash, compareHash };