const Company = require('./models/companies');
const Group = require('./models/groups');

let test = {
    model: () => {
        console.log('Model Test');

        Company.findOne({ name: 'Test'})
            .then((cp) => {
                console.log(cp);
                const gr = new Group({
                    name: 'Lian',
                    cp_id: cp._id,
                });
                return gr.save();
            })
            .then((gr) => {
                return Company.findOneAndUpdate(
                    { _id: gr.cp_id},
                    { $addToSet: {gr_ids: gr._id}},
                    { new: true})
                    .populate('gr_ids');
            })
            .then((r) => {
                console.log(r);
            })
            .catch(err => console.error(err));
    }
};

module.exports.test = test;