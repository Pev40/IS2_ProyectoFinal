const pool = require("../../config/db");

const selectFromEmailPassword = (data, callBack) => {
  pool.query(
    `SELECT id, name, email FROM usuarios WHERE email = ? AND password = ?`,
    [data.email, data.password],
    (error, results, fields) => {
      if (error) return callBack(error);
      return callBack(null, results);
    }
  );
};

module.exports = {
  selectFromEmailPassword,
};
