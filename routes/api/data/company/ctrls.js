const Company = require('../../../../models/companies');

exports.list = (req, res) => {
    Company.find()
        .then((rs) => {res.send({ success: true, ds: rs })})
        .catch((err) => {res.send({success: false, msg: err.message})});
};

exports.add = (req, res) => {
    const { name, rmk} = req.body;

    if (!name) return res.send({success:false, msg: 'There are no name'});
    if (!rmk)  return res.send({success:false, msg: 'There are no Remarks'});
    const cp = new Company({name: name, rmk: rmk});
    cp.save()
        .then(r => res.send({success: true, d: r}))
        .catch(err => res.send({success: false, msg: err.message}));
};

exports.mod = (req, res) => {
    res.send({ success: false, msg: 'mod 준비중입니다' });
};

exports.del = (req, res) => {
    res.send({ success: false, msg: 'del 준비중입니다' });
};