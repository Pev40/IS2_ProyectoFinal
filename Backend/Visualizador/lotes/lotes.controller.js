const { selectAllLotes, updateLoteById } = require("./lotes.service");

const getLotes = (req, res) => {
  selectAllLotes({}, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

const updateLotes = (req, res) => {
  console.log(req.body);
  const { id, disponibility } = req.body;
  updateLoteById({ id, disponibility }, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    console.log(results);
    return res.status(200).json({
      success: true,
      data: results,
    });
  });
};

module.exports = {
  getLotes,
  updateLotes,
};
