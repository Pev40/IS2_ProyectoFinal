const { selectFromEmailPassword } = require("./users.service");

const signIn = (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  selectFromEmailPassword({ email, password }, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err,
      });
    }
    if (!results.length)
      return res
        .status(404)
        .json({ success: false, message: "Usuario no encontrado" });

    return res.status(200).json({
      success: true,
      data: results[0],
    });
  });
};

module.exports = {
  signIn,
};
