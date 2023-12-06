const pool = require("../../config/db");

const selectAllLotes = (data, callBack) => {
  pool.query(`SELECT * FROM lotes`, [], (error, results, fields) => {
    if (error) return callBack(error);
    return callBack(null, results);
  });
};

const updateLoteById = (data, callBack) => {
  console.log("dsa", data.disponibility);
  pool.query(
    `UPDATE lotes SET disponibilidad = ? WHERE id = ?`,
    [data.disponibility, data.id],
    (error, results, fields) => {
      if (error) return callBack(error);
      return callBack(null, results);
    }
  );
};

module.exports = {
  selectAllLotes,
  updateLoteById,
};
