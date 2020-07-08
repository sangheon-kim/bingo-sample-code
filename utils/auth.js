const resObj = {
  true: {
    code: 200,
    mesg: "OK",
  },
  false: {
    code: 200,
    mesg: "OK",
  },
};

module.exports = {
  checkPoc(req) {
    const { poc } = req.body;

    const isRes = true;

    const obj = {
      res: { ...resObj[isRes] },
      body: {
        mesg: "success",
      },
    };

    return obj;
  },
};
